'use strict';

module.exports = {
  extends: ['@clark/ember', '@clark/typescript'],

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
  overrides: require('@clark/eslint-config-ember').overrides
};
