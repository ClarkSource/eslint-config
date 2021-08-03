import getPackage from '@clark/eslint-util-get-package';
import type { Rule } from 'eslint';
import { rules } from 'eslint-plugin-import-helpers';
import type * as UpstreamImportType from 'eslint-plugin-import-helpers/lib/util/import-type';
import type * as Upstream from 'eslint-plugin-import-helpers/rules/order-imports';

import type { RuleContext } from '../types/eslint';
import { clone, getOriginalOptions } from '../utils';

export type {
  NewLinesBetweenOption,
  AlphabetizeOption,
  AlphabetizeConfig,
} from 'eslint-plugin-import-helpers/rules/order-imports';

const PACKAGE = 'package';

export type ValidImportType =
  | UpstreamImportType.ValidImportType
  | typeof PACKAGE;

export type Groups<T = ValidImportType> = Upstream.Groups<T>;

export interface RuleOptions extends Omit<Upstream.RuleOptions, 'groups'> {
  groups?: Groups;
}

const MATCH_NONE = '/foo/';

/**
 * {@link https://github.com/Tibfib/eslint-plugin-import-helpers/blob/v1.1.0/src/rules/order-imports.ts#L18}
 * {@link https://github.com/Tibfib/eslint-plugin-import-helpers/blob/v1.1.0/docs/rules/order-imports.md}
 */
export const DEFAULT_GROUPS = [
  ['module'],
  ['absolute'],
  ['package'],
  ['parent', 'sibling', 'index'],
] as const;

const ruleModule: Rule.RuleModule = {
  ...rules['order-imports'],
  create(context: RuleContext<[options?: RuleOptions]>) {
    const [firstOption, ...otherOptions] = getOriginalOptions(context);

    // Get a copy of the groups.
    const originalGroups = clone(firstOption?.groups || DEFAULT_GROUPS);

    let packageName: UpstreamImportType.RegExpGroup | undefined;
    function getPackageName(): UpstreamImportType.RegExpGroup {
      if (packageName) return packageName;

      const fileName = context.getFilename();
      const packageJSON = getPackage(fileName);
      if (!packageJSON) {
        context.report({
          message: `Could not find a valid 'package.json' for this file.`,
          node: context.getScope().block,
        });
        return MATCH_NONE;
      }
      if (!packageJSON.name) {
        context.report({
          message: `Associated 'package.json' is missing a 'name' field.`,
          node: context.getScope().block,
        });
        return MATCH_NONE;
      }

      packageName = `/^${packageJSON.name.replace(/[./]/g, '\\$&')}($|\\/)/`;
      return packageName;
    }

    const groups: Groups = originalGroups.map(
      (block: ValidImportType | readonly ValidImportType[]) => {
        if (block === PACKAGE) return getPackageName();
        if (!Array.isArray(block))
          return block as Exclude<typeof block, readonly any[]>;

        return (block as readonly ValidImportType[]).map((group) => {
          if (group === PACKAGE) return getPackageName();
          return group;
        });
      },
    );

    // Cannot directly assign, because `Object.isSealed(context)`.
    const patchedContext = Object.create(context, {
      options: {
        value: [{ ...firstOption, groups }, ...otherOptions],
        writable: false,
      },
    });

    return rules['order-imports'].create(patchedContext);
  },
};

export default ruleModule;
