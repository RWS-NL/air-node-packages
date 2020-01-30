import { objectHasProperty } from '../src/ObjectHasProperty';

const obj = { key: 'value' };
test('should contain property', () => {
  expect(objectHasProperty(obj, 'key')).toStrictEqual(true);
});

test('should not contain property', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  expect(objectHasProperty(obj, 'notKey')).toStrictEqual(false);
});
