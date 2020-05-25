import { deprecate } from 'util';

function objHasProp<O>(obj: O, prop: keyof O) {
  return obj && prop in obj;
}

/**
 * Type safely checks if an object includes a given property without using the prototype
 * @param obj Object to analyze
 * @param prop Property to check for
 * @deprecated use Reflect API instead
 * @example Reflect.has(obj, prop)
 * @example objectHasProperty(obj, prop)
 */
export const objectHasProperty = deprecate(
  (...args: Parameters<typeof objHasProp>) => objHasProp(args[0], args[1]),
  'objectHasProperty is deprecated, use Reflect API with "Reflect.has(obj, \'prop\')" instead.'
);
