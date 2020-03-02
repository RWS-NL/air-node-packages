import Collection from '@discordjs/collection';

export interface StackConstructor {
  new (): Stack<unknown, unknown>;
  new <K, V>(entries?: ReadonlyArray<readonly [K, V]> | null): Stack<K, V>;
  new <K, V>(iterable: Iterable<readonly [K, V]>): Stack<K, V>;
  readonly prototype: Stack<unknown, unknown>;
  readonly [Symbol.species]: StackConstructor;
}

/**
 * A Map with additional utility methods. This can be used throughout Rijkswaterstaat projects rather than
 * Arrays of objects for anything that has an ID, for significantly improved performance and ease-of-use.
 *
 * @extends {Collection} ([GitHub Page](https://github.com/discordjs/collection)) which itself adds a lot of utility methods
 * @extends {Map} ([MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map))
 */
export class Stack<K extends string | number | unknown, V> extends Collection<K, V> {
  public static readonly default: typeof Stack = Stack;
  public ['constructor']: typeof Stack;

  public constructor(entries?: ReadonlyArray<readonly [K, V]> | null) {
    super(entries);
  }

  /**
   * Creates a JSON representation of the Stack
   * This is used internally by Redux and ensures that Stacks can be used for Redux.
   */
  public toJSON() {
    return this.array();
  }
}
