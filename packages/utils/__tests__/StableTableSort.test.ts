import { stableTableSort } from '../src/StableTableSort';

interface ArrType extends Record<string, string | number> {
  key: number;
  prop: string;
}
const arr: ArrType[] = [
  { key: 4, prop: '4' },
  { key: 1, prop: '2' }
];
const mappings: Map<keyof ArrType, string> = new Map(
  [
    [ 'key', ((type: ArrType) => type.key.toString()) as unknown as string ],
    [ 'prop', ((type: ArrType) => type.prop) as unknown as string ]
  ]
);

test('should sort array of data', () => {
  const expected = [ { key: 1, prop: '2' }, { key: 4, prop: '4' } ];
  const actual = stableTableSort(arr, 'key', 'asc', mappings);
  expect(actual).toStrictEqual(expected);
});