import { sync as findUpSync, Options, Match } from 'find-up';
export { Options, StopSymbol, Match } from 'find-up';

type Matcher = (directory: string) => Match;

const CACHE = new Map<Matcher, Map<string, Match>>();

export function findUpWithCache(
  matcher: Matcher,
  options?: Options
): string | undefined {
  if (!CACHE.has(matcher)) CACHE.set(matcher, new Map<string, Match>());
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const cache = CACHE.get(matcher)!;

  const visited: string[] = [];

  const resolvedPath = findUpSync((directory: string) => {
    if (cache.has(directory)) return cache.get(directory);
    visited.push(directory);

    return matcher(directory);
  }, options);

  for (const directory of visited) {
    cache.set(directory, resolvedPath);
  }

  return resolvedPath;
}
