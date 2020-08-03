'use strict';

module.exports = {
  extends: ['@clark/ember', '@clark/typescript'],

  /**
   * Since the order of application is `ember` and _then_ `typescript`, rules
   * set in `typescript` and it's base configs, override configs in `ember`.
   * This also includes the full eslint base config again, for which we want to
   * disable or diminish a few rules.
   */
  rules: require('@clark/eslint-config-ember').rules,

  /**
   * Since the order of application is `ember` and _then_ `typescript`, rules
   * set in `typescript`, override overrides in `ember`. While we in general
   * want any regular rules in `typescript` to override any regular rules in
   * `ember`, we want the overrides in `ember` to take effect.
   *
   * To achieve this, we include the overrides again.
   *
   * @see https://eslint.org/docs/user-guide/migrating-to-6.0.0#-overrides-in-an-extended-config-file-can-now-be-overridden-by-a-parent-config-file
   */
  overrides: [
    ...require('@clark/eslint-config-typescript').overrides,
    ...require('@clark/eslint-config-ember').overrides
  ]
};
