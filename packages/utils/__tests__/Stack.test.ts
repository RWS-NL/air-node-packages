import { Stack } from '../src/Stack';

describe('Stack tests', () => {
  test('do basic map operations', () => {
    const stack = new Stack();
    stack.set('a', 1);

    expect(stack.size).toBe(1);
    expect(stack.has('a')).toBe(true);
    expect(stack.get('a')).toBe(1);

    stack.delete('a');

    expect(stack.has('a')).toBe(false);
    expect(stack.get('a')).toBeUndefined();

    stack.clear();

    expect(stack.size).toBe(0);
  });

  test('convert Stack to array with caching', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);

    const array1 = stack.array();

    expect(array1).toStrictEqual([1, 2, 3]);
    expect(array1).toStrictEqual(stack.array());

    stack.set('d', 4);

    const array2 = stack.array();

    expect(array2).toStrictEqual([1, 2, 3, 4]);
    expect(array2).toStrictEqual(stack.array());
  });

  test('get the first item of the Stack', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    expect(stack.first()).toBe(1);
  });

  test('get the first 3 items of the Stack where size equals', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);
    expect(stack.first(3)).toStrictEqual([1, 2, 3]);
  });

  test('get the first 3 items of the Stack where size is less', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    expect(stack.first(3)).toStrictEqual([1, 2]);
  });

  test('get the last item of the Stack', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    expect(stack.last()).toBe(2);
  });

  test('get the last 3 items of the Stack', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);
    expect(stack.last(3)).toStrictEqual([1, 2, 3]);
  });

  test('get the last 3 items of the Stack where size is less', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    expect(stack.last(3)).toStrictEqual([1, 2]);
  });

  test('find an item in the Stack', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);

    expect(stack.find(x => x === 1)).toBe(1);
    expect(stack.find(x => x === 10)).toBeUndefined();
  });

  test('sweep items from the Stack', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);
    const n1 = stack.sweep(x => x === 2);

    expect(n1).toBe(1);
    expect(stack.array()).toStrictEqual([1, 3]);

    const n2 = stack.sweep(x => x === 4);
    expect(n2).toBe(0);
    expect(stack.array()).toStrictEqual([1, 3]);
  });

  test('filter items from the Stack', () => {
    const stack = new Stack<string, number>();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);
    const filtered = stack.filter(x => x % 2 === 1);

    expect(stack.size).toBe(3);
    expect(filtered.size).toBe(2);
    expect(filtered.array()).toStrictEqual([1, 3]);
  });

  test('partition a Stack into two Stacks', () => {
    const stack = new Stack<string, number>();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);
    stack.set('d', 4);
    stack.set('e', 5);
    stack.set('f', 6);
    const [even, odd] = stack.partition(x => x % 2 === 0);

    expect(even.array()).toStrictEqual([2, 4, 6]);
    expect(odd.array()).toStrictEqual([1, 3, 5]);
  });

  test('map items in a Stack into an array', () => {
    const stack = new Stack<string, number>();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);
    const mapped = stack.map(x => x + 1);

    expect(mapped).toStrictEqual([2, 3, 4]);
  });

  test('map items in a Stack into a Stack', () => {
    const stack = new Stack<string, number>();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);
    const mapped = stack.mapValues(x => x + 1);

    expect(mapped.array()).toStrictEqual([2, 3, 4]);
  });

  test('flatMap items in a Stack into a single Stack', () => {
    const firstSack = new Stack<string, number>();
    const secondStack = new Stack<string, number>();
    const combinedStack = new Stack<string, { a: typeof firstSack | typeof secondStack }>();

    firstSack.set('z', 1);
    firstSack.set('x', 2);

    secondStack.set('c', 3);
    secondStack.set('v', 4);

    combinedStack.set('a', { a: firstSack });
    combinedStack.set('b', { a: secondStack });

    const mapped = combinedStack.flatMap(x => x.a);

    expect(mapped.array()).toStrictEqual([1, 2, 3, 4]);
  });

  test('check if some items pass a predicate', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);

    expect(stack.some(x => x === 2)).toBeTruthy();
  });

  test('check if every items pass a predicate', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);

    expect(!stack.every(x => x === 2)).toBeTruthy();
  });

  test('reduce Stack into a single value with initial value', () => {
    const stack = new Stack<string, number>();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);
    const sum = stack.reduce((a, x) => a + x, 0);

    expect(sum).toBe(6);
  });

  test('reduce Stack into a single value without initial value', () => {
    const stack = new Stack<string, number>();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);
    const sum = stack.reduce<number>((a, x) => a + x);

    expect(sum).toBe(6);
  });

  test('reduce empty Stack without initial value', () => {
    const stack = new Stack<any, number>();
    expect(() => stack.reduce<number>((a, x) => a + x)).toThrowError(TypeError);
  });

  test('iterate over each item', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);
    const a: any[] = [];
    stack.each((v, k) => a.push([k, v]));

    expect(a).toStrictEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3]
    ]);
  });

  test('tap the Stack', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);
    stack.tap(c => expect(c === stack).toBeTruthy());
  });

  test('shallow clone the Stack', () => {
    const stack = new Stack();
    stack.set('a', 1);
    stack.set('b', 2);
    stack.set('c', 3);
    const clone = stack.clone();
    expect(stack.array()).toStrictEqual(clone.array());
  });

  test('merge multiple Stacks', () => {
    const stack1 = new Stack();
    stack1.set('a', 1);
    const stack2 = new Stack();
    stack2.set('b', 2);
    const stack3 = new Stack();
    stack3.set('c', 3);
    const merged = stack1.concat(stack2, stack3);

    expect(merged.array()).toStrictEqual([1, 2, 3]);
    expect(stack1 !== merged).toBeTruthy();
  });

  test('check equality of two Stacks', () => {
    const stack1 = new Stack();
    stack1.set('a', 1);
    const stack2 = new Stack();

    stack2.set('a', 1);
    expect(stack1.equals(stack2)).toBeTruthy();

    stack2.set('b', 2);
    expect(!stack1.equals(stack2)).toBeTruthy();

    stack2.clear();
    expect(!stack1.equals(stack2)).toBeTruthy();
  });

  test('sort a Stack in place', () => {
    const stack = new Stack<string, number>();
    stack.set('a', 3);
    stack.set('b', 2);
    stack.set('c', 1);
    expect(stack.array()).toStrictEqual([3, 2, 1]);

    stack.sort((a, b) => a - b);
    expect(stack.array()).toStrictEqual([1, 2, 3]);
  });

  test('random select from a Stack', () => {
    const stack = new Stack();
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

    for (let i = 0; i < chars.length; i++) stack.set(chars[i], numbers[i]);

    const random = stack.random(5);
    expect(random).toHaveLength(5);

    const set = new Set(random);
    expect(set.size === random.length).toBeTruthy();
  });

  test('sort a Stack', () => {
    const stack = new Stack<string, number>();
    stack.set('a', 3);
    stack.set('b', 2);
    stack.set('c', 1);
    expect(stack.array()).toStrictEqual([3, 2, 1]);
    const sorted = stack.sorted((a, b) => a - b);
    expect(stack.array()).toStrictEqual([3, 2, 1]);
    expect(sorted.array()).toStrictEqual([1, 2, 3]);
  });

  test('Creates a JSON representation of a simple Stack', () => {
    const stack = new Stack<string, number>([
      ['a', 1],
      ['b', 2],
      ['c', 3],
      ['d', 4],
      ['e', 5],
      ['f', 6]
    ]);

    expect(stack.toJSON()).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('Creates a JSON representation of a Stack with object values', () => {
    const stack = new Stack<string, { key: string; value: number }>([
      ['a', { key: 'one', value: 1 }],
      ['b', { key: 'two', value: 2 }],
      ['c', { key: 'three', value: 3 }],
      ['d', { key: 'four', value: 4 }],
      ['e', { key: 'five', value: 5 }],
      ['f', { key: 'six', value: 6 }]
    ]);

    expect(stack.toJSON()).toStrictEqual([
      { key: 'one', value: 1 },
      { key: 'two', value: 2 },
      { key: 'three', value: 3 },
      { key: 'four', value: 4 },
      { key: 'five', value: 5 },
      { key: 'six', value: 6 }
    ]);
  });
});
