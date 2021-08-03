import type { Rule } from 'eslint';

export interface RuleContext<Options extends unknown[]>
  extends Rule.RuleContext {
  options: Options;
}

export type OptionsOf<Rule extends Rule.RuleModule> = Parameters<
  Rule['create']
>[0]['options'];
