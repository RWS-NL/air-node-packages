/**
 * Verify if the input is an object literal (or class).
 * @param input The object to verify
 */
export function isObject(input: unknown): boolean {
  return input ? (input as object).constructor === Object : false;
}
