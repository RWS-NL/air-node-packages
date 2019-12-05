import { isObject } from '../src';

describe('isObject', () => {
  test('isObject(string)', () => {
    const value = 'Hello World';
    expect(isObject(value)).toBe(false);
    expect(isObject(value)).toMatchSnapshot();
  });

  test('isObject(number)', () => {
    const value = 420;
    expect(isObject(value)).toBe(false);
    expect(isObject(value)).toMatchSnapshot();
  });

  test('isObject(bigint)', () => {
    // eslint-disable-next-line no-undef
    const value = BigInt(420);
    expect(isObject(value)).toBe(false);
    expect(isObject(value)).toMatchSnapshot();
  });

  test('isObject(boolean)', () => {
    const value = true;
    expect(isObject(value)).toBe(false);
    expect(isObject(value)).toMatchSnapshot();
  });

  test('isObject(undefined)', () => {
    const value = undefined;
    expect(isObject(value)).toBe(false);
    expect(isObject(value)).toMatchSnapshot();
  });

  test('isObject(object)', () => {
    const value = { class: '' };
    expect(isObject(value)).toBe(true);
    expect(isObject(value)).toMatchSnapshot();
  });

  test('isObject(object-null)', () => {
    const value = null;
    expect(isObject(value)).toBe(false);
    expect(isObject(value)).toMatchSnapshot();
  });

  test('isObject(object-array)', () => {
    const value: unknown[] = [];
    expect(isObject(value)).toBe(false);
    expect(isObject(value)).toMatchSnapshot();
  });

  test('isObject(object-non-literal)', () => {
    // eslint-disable-next-line
    const value = new class A {}();
    expect(isObject(value)).toBe(false);
    expect(isObject(value)).toMatchSnapshot();
  });

  test('isObject(function)', () => {
    // eslint-disable-next-line
    const value = function myClass(): void {
      /* Noop */
    };
    expect(isObject(value)).toBe(false);
    expect(isObject(value)).toMatchSnapshot();
  });

  test('isObject(arrow)', () => {
    const value = (): void => {
      /* Noop */
    };
    expect(isObject(value)).toBe(false);
    expect(isObject(value)).toMatchSnapshot();
  });

  test('isObject(class)', () => {
    // eslint-disable-next-line
    const value = class A { };
    expect(isObject(value)).toBe(false);
    expect(isObject(value)).toMatchSnapshot();
  });

  test('Function Snapshot', () => {
    expect(isObject.toString()).toMatchSnapshot();
  });
});