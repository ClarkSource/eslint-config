declare module 'eslint-plugin-import-helpers' {
  import { Rule } from 'eslint';
  import { Node } from 'estree';

  interface OrderImportsRule extends Rule.RuleModule {
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
        }
      ];
    };

    create(context: Rule.RuleContext): OrderImportsRuleListener;
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

  interface Rules {
    'order-imports': OrderImportsRule;
  }

  export const rules: Rules;
}
