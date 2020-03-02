import { Stack } from './Stack';

/**
 * Create a `Stack` using the `keyExtractor` and `valueExtractor` the to obtain the key and value for each element.
 * @note If multiple elements have the same key only the last element with that key will remain.
 * @param input The array of data to transform into a Stack
 * @param keyExtractor A function that describes where to find the key to use for the Stack
 * @param valueExtractor A function that describes where to find the value to use for the Stack
 * @returns A `Stack<Key, Value>` of the values, mapped by the given key
 */
export function toStack<I, K, V>(input: Array<I>, keyExtractor: (_: I) => K, valueExtractor: (_: I) => V): Stack<K, V> {
  return input.reduce<Stack<K, V>>((accumulator: Stack<K, V>, element: I) => {
    accumulator.set(keyExtractor(element), valueExtractor(element));
    return accumulator;
  }, new Stack<K, V>());
}
