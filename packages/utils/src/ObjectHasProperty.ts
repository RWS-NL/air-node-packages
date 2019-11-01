/**
 * Type safely checks if an object includes a given property without using the prototype
 * @param obj Object to analyze
 * @param prop Property to check for
 */
export const objectHasProperty = <O extends {}>(obj: O, prop: keyof O) => obj && prop in obj;

export default objectHasProperty;