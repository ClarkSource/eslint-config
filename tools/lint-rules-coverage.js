#!/usr/bin/env node
/* eslint-disable no-console */

const path = require('path');

const {
  Legacy: { naming },
} = require('@eslint/eslintrc');
const { CLIEngine } = require('eslint');

const [baseConfigPath, ...additiveConfigNames] = process.argv.slice(2);
const baseConfig = require(path.resolve(baseConfigPath));
const additiveConfigs = Object.fromEntries(
  additiveConfigNames.map((n) => {
    const normalizedName = naming.normalizePackageName(n, 'eslint-plugin');
    return [normalizedName, require(normalizedName)];
  }),
);

const cliEngine = new CLIEngine({ baseConfig, useEslintrc: false });
const effectiveBaseConfig = cliEngine.getConfigForFile('foo.js');

const baseRuleNames = Object.keys(effectiveBaseConfig.rules);

const filterAdditiveRules = (predicate) =>
  Object.fromEntries(
    Object.entries(additiveConfigs).map(([name, config]) => [
      name,
      Object.keys(config.rules).filter((ruleName) =>
        predicate(ruleName, `${naming.getNamespaceFromTerm(name)}${ruleName}`),
      ),
    ]),
  );

const isAdditiveRulesEmpty = (rules) =>
  Object.values(rules).every((v) => !v || v.length === 0);

const missingOverrides = filterAdditiveRules(
  (name, scopedNamed) =>
    baseRuleNames.includes(name) && !baseRuleNames.includes(scopedNamed),
);

const unusedRules = filterAdditiveRules(
  (name, scopedNamed) =>
    !baseRuleNames.includes(name) && !baseRuleNames.includes(scopedNamed),
);

console.log({ missingOverrides, unusedRules });

if (!isAdditiveRulesEmpty(missingOverrides))
  throw new Error(
    `There are some overrides available for rules defined in the base config, that are not used.`,
  );
