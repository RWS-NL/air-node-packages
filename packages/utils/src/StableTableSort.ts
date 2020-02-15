import sort from 'lodash.orderby';

/**
 * Stabily sorts an array of objects using lodash.orderby
 * @param array Array of objects to order
 * @param orderBy Key to order by
 * @param order Order ascending or descending
 * @param headerMapping Mapping of table headers for sorting on nested properties
 * @example
 * ```typescript
 * interface ArrType {
 *   key: string;
 *   prop: string;
 * }
 *
 * const arr: ArrType[] = [
 *   { key: '1', prop: '2' },
 *   { key: '4', prop: '4' }
 * ];
 *
 * const mappings: Map<keyof ArrType, string> = new Map(
 *   [
 *     [ 'key', ((type: ArrType) => type.key.toString()) as unknown as string ],
 *     [ 'prop', ((type: ArrType) => type.prop) as unknown as string ]
 *   ]
 * );
 *
 * stableTableSort(arr, 'key', 'asc', mappings);
 * ```
 */
export function stableTableSort<T>(
  array: T[],
  orderBy: keyof T,
  order: TableOrder,
  headerMapping: Map<keyof T, string>
) {
  const orderValue = headerMapping.get(orderBy);

  return sort(array, [orderValue], [order]) as T[];
}

export type TableOrder = 'desc' | 'asc';
