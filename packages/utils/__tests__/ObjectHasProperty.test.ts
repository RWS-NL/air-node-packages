import { objectHasProperty } from '../src/ObjectHasProperty';

const obj = { key: 'value' };
test('should contain property', () => {
  // @ts-expect-error
  expect(objectHasProperty(obj, 'key')).toStrictEqual(true);
});

test('should not contain property', () => {
  // @ts-expect-error
  expect(objectHasProperty(obj, 'notKey')).toStrictEqual(false);
});
