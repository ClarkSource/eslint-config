/* eslint-disable no-param-reassign */

import getPackage from '@clark/eslint-util-get-package';
// eslint-disable-next-line node/no-unpublished-import
import { Rule } from 'eslint';
import { rules } from 'eslint-plugin-import-helpers';

const PACKAGE = 'package';
const MATCH_NONE = '/foo/';

const ruleModule: Rule.RuleModule = {
  ...rules['order-imports'],
  create(context) {
    const options = context.options[0] || {};
    // eslint-disable-next-line prefer-destructuring
    const groups: (string | string[])[] = options.groups || [];

    let packageName: string | undefined;
    function getPackageName() {
      if (packageName) return packageName;

      const fileName = context.getFilename();
      const packageJSON = getPackage(fileName);
      if (!packageJSON) {
        context.report({
          message: `Could not find a valid 'package.json' for this file.`,
          node: context.getScope().block
        });
        return MATCH_NONE;
      }
      if (!packageJSON.name) {
        context.report({
          message: `Associated 'package.json' is missing a 'name' field.`,
          node: context.getScope().block
        });
        return MATCH_NONE;
      }

      packageName = `/^${packageJSON.name.replace('/', '\\/')}/?/`;
      return packageName;
    }

    groups.forEach((block, i) => {
      if (block === PACKAGE) {
        groups[i] = getPackageName();
      } else if (Array.isArray(block)) {
        block.forEach((group, j) => {
          if (group === PACKAGE) {
            block[j] = getPackageName();
          }
        });
      } else {
        context.report({
          message: `Invalid 'groups' config: ${block}`,
          node: context.getScope().block
        });
      }
    });

    context.options[0] = options;
    options.groups = groups;

    return rules['order-imports'].create(context);
  }
};

export default ruleModule;
