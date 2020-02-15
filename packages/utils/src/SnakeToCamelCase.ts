/**
 * Transforms text from snake_case to camelCase.
 * @param str Text to transform
 */
export function snakeToCamelCase(str: string) {
  return str.toLowerCase().replace(/([-_][a-z])/g, (group: string) =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );
}
