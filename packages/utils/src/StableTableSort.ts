import sort from 'lodash.orderby';

/**
 * Stabily sorts an array of objects using lodash.orderby
 * @param array Array of objects to order
 * @param orderBy Key to order by
 * @param order Order ascending or descending
 * @param headerMapping Mapping of table headers for sorting on nested properties
 * @example
 * ```typescript
 * interface ArrType extends Record<string, string | number> {
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
export const stableTableSort = <T extends Record<string, unknown>>(array: T[], orderBy: keyof T, order: TableOrder, headerMapping: Map<keyof T, string>) => {
  const orderValue = headerMapping.get(orderBy as string);

  return sort(array, [ orderValue ], [ order ]);
};

export type TableOrder = 'desc' | 'asc';

export default stableTableSort;