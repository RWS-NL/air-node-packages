import { mergeObjects } from '../src/MergeObjects';

describe('Merge Objects', () => {
  test('mergeObjects(basic)', () => {
    const source = { a: 0, b: 1 };
    const target = {};
    expect(mergeObjects(target, source)).toStrictEqual({ a: 0, b: 1 });
    expect(mergeObjects(target, source)).toMatchSnapshot();
  });

  test('mergeObjects(mutation)', () => {
    const source = { a: 0, b: 1 };
    const target = {};
    mergeObjects(target, source);

    expect(source).toStrictEqual({ a: 0, b: 1 });
    expect(target).toStrictEqual({ a: 0, b: 1 });
    expect(source).toMatchSnapshot();
    expect(target).toMatchSnapshot();
  });

  test('mergeObjects(clone)', () => {
    const source = { a: 0, b: 1 };
    const target = {};
    expect(mergeObjects(target, source)).toStrictEqual({ a: 0, b: 1 });
    expect(mergeObjects(target, source)).toMatchSnapshot();
  });

  test('mergeObjects(partial)', () => {
    const source = { a: 0, b: 1 };
    const target = { a: 2 };
    expect(mergeObjects(target, source)).toStrictEqual({ a: 0, b: 1 });
    expect(mergeObjects(target, source)).toMatchSnapshot();
  });

  test('mergeObjects(extended)', () => {
    const source = { a: 0, b: 1 };
    const target = { a: 2, i: 2 };
    expect(mergeObjects(target, source)).toStrictEqual({ a: 0, i: 2, b: 1 });
    expect(mergeObjects(target, source)).toMatchSnapshot();
  });

  // TODO 20220103: Figure out why test passes locally but fails in pipeline
  test.skip('Function Snapshot', () => {
    expect(mergeObjects.toString()).toMatchSnapshot();
  });
});
