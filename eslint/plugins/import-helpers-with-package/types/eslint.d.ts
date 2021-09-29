import type { Rule } from 'eslint';

export interface RuleContext<Options extends unknown[]>
  extends Rule.RuleContext {
  options: Options;
}

export type OptionsOf<R extends Rule.RuleModule> = Parameters<
  R['create']
>[0]['options'];
