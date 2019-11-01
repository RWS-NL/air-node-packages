/**
 * Transforms text from snake_case to camelCase.
 * @param str Text to transform
 */
export const snakeToCamelCase = (str: string) => str.toLowerCase().replace(
  /([-_][a-z])/g,
  (group: string) => group.toUpperCase()
    .replace('-', '')
    .replace('_', '')
);

export default snakeToCamelCase;