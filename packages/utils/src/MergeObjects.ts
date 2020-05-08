import { isObject } from './IsObject';

export type KeyedObject = Record<PropertyKey, unknown>;

/**
 * Merges two objects
 * @param objTarget The object to be merged
 * @param objSource The object to merge
 */
export function mergeObjects<A, B>(objTarget: A, objSource: B): A & B {
  for (const [key, value] of Object.entries(objSource) as [keyof B, unknown][]) {
    const targetValue = (objTarget as KeyedObject)[key];
    if (isObject(value)) {
      Reflect.set(
        objTarget as KeyedObject,
        key,
        isObject(targetValue) ? mergeObjects(targetValue as KeyedObject, value as KeyedObject) : value
      );
    } else if (!isObject(targetValue)) {
      Reflect.set(objTarget as KeyedObject, key, value);
    }
  }
  return objTarget as A & B;
}
