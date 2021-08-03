declare module 'eslint-plugin-import-helpers/lib/util/import-type' {
  type PATH_SEPARATOR = '/' | '\\';

  export function isAbsolute(name: string): name is `/${string}`;

  // a module is anything that doesn't start with a . or a / or a \
  export function isModule(name: string): boolean;

  export function isRelativeToParent(
    name: string,
  ): name is `..${PATH_SEPARATOR}${string}`;

  export function isIndex(
    name: string,
  ): name is '.' | './' | './index' | './index.js' | './index.ts';

  export function isRelativeToSibling(
    name: string,
  ): name is `.${PATH_SEPARATOR}${string}`;

  type RegExpGroup = `/${string}/`;

  export function isRegularExpressionGroup(group: string): group is RegExpGroup;

  export type KnownImportType =
    | 'absolute'
    | 'module'
    | 'parent'
    | 'index'
    | 'sibling';
  export type ValidImportType = KnownImportType | RegExpGroup;
  export type EveryImportType = ValidImportType | 'unknown';
  export type RegExpGroups = [string, RegExp][];

  export function determineImportType(
    name: string,
    regExpGroups: RegExpGroups,
  ): EveryImportType;
}

declare module 'eslint-plugin-import-helpers/rules/order-imports' {
  import type { Rule } from 'eslint';
  import type { ValidImportType } from 'eslint-plugin-import-helpers/lib/util/import-type';
  import type { Node } from 'estree';

  export type NewLinesBetweenOption =
    | 'ignore'
    | 'always'
    | 'always-and-inside-groups'
    | 'never';

  export type AlphabetizeOption = 'ignore' | 'asc' | 'desc';
  export type AlphabetizeConfig = {
    order: AlphabetizeOption;
    ignoreCase: boolean;
  };

  export type Groups<T = ValidImportType> = (T | T[])[];

  export type RuleOptions = {
    groups?: Groups;
    newlinesBetween?: NewLinesBetweenOption;
    alphabetize?: Partial<AlphabetizeConfig>;
  };

  export interface OrderImportsRule extends Rule.RuleModule {
    meta: {
      type: 'suggestion';
      docs: {
        url: 'https://github.com/Tibfib/eslint-plugin-import-helpers/blob/master/docs/rules/order-imports.md';
      };

      fixable: 'code';
      schema: [
        {
          type: 'object';
          properties: {
            groups: {
              type: 'array';
            };
            newlinesBetween: {
              enum: ['ignore', 'always', 'always-and-inside-groups', 'never'];
            };
            alphabetize: {
              type: 'object';
              properties: {
                order: {
                  enum: ['ignore', 'asc', 'desc'];
                  default: 'ignore';
                };
                ignoreCase: {
                  type: 'boolean';
                  default: false;
                };
              };
            };
          };
          additionalProperties: false;
        },
      ];
    };

    create(
      context: Omit<Rule.RuleContext, 'options'> & {
        options: [config?: RuleOptions];
      },
    ): OrderImportsRuleListener;
  }

  interface OrderImportsRuleListener extends Rule.RuleListener {
    ImportDeclaration(node: Node): void;
    CallExpression(node: Node): void;
    'Program:exit'(): void;
    FunctionDeclaration(): void;
    FunctionExpression(): void;
    ArrowFunctionExpression(): void;
    BlockStatement(): void;
    ObjectExpression(): void;
    'FunctionDeclaration:exit'(): void;
    'FunctionExpression:exit'(): void;
    'ArrowFunctionExpression:exit'(): void;
    'BlockStatement:exit'(): void;
    'ObjectExpression:exit'(): void;
  }

  const rule: OrderImportsRule;
  export default rule;
}

declare module 'eslint-plugin-import-helpers' {
  export interface Rules {
    'order-imports': typeof import('eslint-plugin-import-helpers/rules/order-imports').default;
  }

  export const rules: Rules;
}
