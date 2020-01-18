module.exports = {
  plugins: ['qunit'],
  extends: ['plugin:qunit/recommended', 'plugin:qunit/two'],
  rules: {
    /**
     * @TODO re-enable, once upstream bug is fixed.
     * @see https://github.com/platinumazure/eslint-plugin-qunit/issues/75
     */
    'qunit/no-global-module-test': 'off',
    'qunit/no-global-stop-start': 'off',

    /**
     * QUnit test and module callbacks can share state by modifying properties
     * of `this` within those callbacks.
     *
     * This only works when using function expressions, which allow for dynamic
     * binding of `this` by the QUnit library. Arrow function expressions will
     * not work in this case, because arrow functions will always bind to
     * whatever the value of this was in the enclosing scope (in QUnit tests,
     * usually the global object). This means that developers who use arrow
     * function expressions as test or module callbacks will not be able to
     * share state and may encounter other problems.
     *
     * @see https://github.com/platinumazure/eslint-plugin-qunit/blob/master/docs/rules/no-arrow-tests.md
     */
    'qunit/no-arrow-tests': 'error',

    /**
     * The `assert.equal` assertion method in QUnit uses loose equality
     * comparison. In a project which favors strict equality comparison, it is
     * better to use `assert.strictEqual` for scalar values and either
     * `assert.deepEqual` or `assert.propEqual` for more complex objects.
     *
     * @see https://github.com/platinumazure/eslint-plugin-qunit/blob/master/docs/rules/no-assert-equal.md
     */
    'qunit/no-assert-equal': 'error',

    /**
     * Generally, it is not a good idea to use logical expressions as assertion
     * arguments. Logical-and assertions can be broken down into multiple
     * assertions, while logical-or assertions may be indicative of uncertainty
     * or nondeterminism in a test.
     *
     * @see https://github.com/platinumazure/eslint-plugin-qunit/blob/master/docs/rules/no-assert-logical-expression.md
     */
    'qunit/no-assert-logical-expression': 'error',

    /**
     * Sometimes, QUnit assertions contain relations (such as `expected ===
     * actual`). Many of these relations can be expressed better using different
     * assertion methods (such as `assert.strictEqual`). However, even for those
     * comparisons which cannot easily be expressed (such as `actual >
     * expected`), comparing those results explicitly to `true` or `false`
     * provides no added value, because the assertion will show that `true`
     * equals or does not equal `true`.
     *
     * In any comparison between a relational expression (`actual > expected`)
     * and a boolean, it is at least possible to convert the assertion to use
     * `assert.ok` or `assert.notOk`. In addition, custom assertions could be
     * used or created to provide better output.
     *
     * @see https://github.com/platinumazure/eslint-plugin-qunit/blob/master/docs/rules/no-compare-relation-boolean.md
     */
    'qunit/no-compare-relation-boolean': 'error',

    /**
     * This rule aims to detect non-deterministic unit testing by looking for
     * assertions in an if statement or conditional expression.
     *
     * Most of the time, a unit test should know what it is testing and what
     * assertions should be run for a given test. Conditional assertions suggest
     * that the developer is not sure how the unit test should run, or else that
     * the developer is unfamiliar with testing boolean conditions within an
     * assertion.
     *
     * @see https://github.com/platinumazure/eslint-plugin-qunit/blob/master/docs/rules/no-conditional-assertions.md
     */
    'qunit/no-conditional-assertions': 'error',

    /**
     * This rule aims to prevent early returns in a QUnit test. Unit tests which
     * can return early are usually indications that a test is nondeterministic
     * or too dependent on environmental factors. On the rare occasion that a
     * test should be run conditionally, the whole test should be run or
     * skipped, rather than having a test that can return early (which is harder
     * to maintain).
     *
     * @see https://github.com/platinumazure/eslint-plugin-qunit/blob/master/docs/rules/no-early-return.md
     */
    'qunit/no-early-return': 'error',

    /**
     * Negated `assert.ok()` or `assert.notOk()` solutions can be misleading,
     * because the error message may show a double negative or otherwise be hard
     * to read. It is usually better to use the opposite assertion in order to
     * get a better error message.
     *
     * @see https://github.com/platinumazure/eslint-plugin-qunit/blob/master/docs/rules/no-negated-ok.md
     */
    'qunit/no-negated-ok': 'error'
  }
};
