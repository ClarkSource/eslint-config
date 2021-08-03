import type { RuleContext } from './types/eslint';

export const clone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

const OPTIONS = new WeakMap();

export function getOriginalOptions<T extends unknown[]>(
  context: RuleContext<T>,
): T {
  if (!OPTIONS.has(context)) OPTIONS.set(context, context.options);
  return OPTIONS.get(context);
}
