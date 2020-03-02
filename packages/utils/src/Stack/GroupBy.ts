import { Stack } from './Stack';

/**
 * Group the elements of the input array to a Stack using the keyExtractor and valueExtractor the
 * to obtain the key and value for each element.
 * @param input The array of data to group into a Stack
 * @param keyExtractor A function that describes where to find the key to use for the Stack
 * @param valueExtractor A function that describes where to find the value to use for the Stack
 * @see Stack
 * @returns A `Stack<Key, Value[]>` of the grouped values
 */
export function groupBy<I, K, V>(
  input: Array<I>,
  keyExtractor: (_: I) => K,
  valueExtractor: (_: I) => V
): Stack<K, V[]> {
  return input.reduce<Stack<K, V[]>>((accumulator: Stack<K, V[]>, element: I) => {
    const key = keyExtractor(element);
    const values = accumulator.get(key) || [];

    values.push(valueExtractor(element));
    accumulator.set(key, values);

    return accumulator;
  }, new Stack<K, V[]>());
}
