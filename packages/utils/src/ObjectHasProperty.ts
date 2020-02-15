/**
 * Type safely checks if an object includes a given property without using the prototype
 * @param obj Object to analyze
 * @param prop Property to check for
 */
export function objectHasProperty<O extends object>(obj: O, prop: keyof O) {
  return obj && prop in obj;
}
