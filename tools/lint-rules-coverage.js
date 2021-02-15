#!/usr/bin/env node

// eslint-disable-next-line no-process-exit
if (process.version.startsWith('v10')) process.exit(0);

const path = require('path');

const {
  Legacy: { naming }
} = require('@eslint/eslintrc');
const { CLIEngine } = require('eslint');

const [baseConfigPath, ...additiveConfigNames] = process.argv.slice(2);
const baseConfig = require(path.resolve(baseConfigPath));
// eslint-disable-next-line node/no-unsupported-features/es-builtins
const additiveConfigs = Object.fromEntries(
  additiveConfigNames.map(n => {
    const normalizedName = naming.normalizePackageName(n, 'eslint-plugin');
    return [normalizedName, require(normalizedName)];
  })
);

const cliEngine = new CLIEngine({ baseConfig, useEslintrc: false });
const effectiveBaseConfig = cliEngine.getConfigForFile('foo.js');

const baseRuleNames = Object.keys(effectiveBaseConfig.rules);

const filterAdditiveRules = predicate =>
  // eslint-disable-next-line node/no-unsupported-features/es-builtins
  Object.fromEntries(
    Object.entries(additiveConfigs).map(([name, config]) => [
      name,
      Object.keys(config.rules).filter(ruleName =>
        predicate(ruleName, `${naming.getNamespaceFromTerm(name)}${ruleName}`)
      )
    ])
  );

const isAdditiveRulesEmpty = rules =>
  Object.values(rules).every(v => !v || v.length === 0);

const missingOverrides = filterAdditiveRules(
  (name, scopedNamed) =>
    baseRuleNames.includes(name) && !baseRuleNames.includes(scopedNamed)
);

const unusedRules = filterAdditiveRules(
  (name, scopedNamed) =>
    !baseRuleNames.includes(name) && !baseRuleNames.includes(scopedNamed)
);

console.log({ missingOverrides, unusedRules });

if (!isAdditiveRulesEmpty(missingOverrides))
  throw new Error(
    `There are some overrides available for rules defined in the base config, that are not used.`
  );
