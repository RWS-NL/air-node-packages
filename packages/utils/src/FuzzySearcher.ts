import Fuse, { FuseOptions } from 'fuse.js';

export default class FuzzySearcher <O> {
  private readonly object: O[];
  private readonly fuseOptions?: FuseOptions<O>;

  constructor(obj: O[], keys: (keyof O | string)[], options?: FuseOptions<O>) {
    this.object = obj;
    this.fuseOptions = {
      threshold: 0.2,
      ...options,
      keys,
    };
  }

  public runFuzzy(query: string) {
    const locquery = query.toLowerCase();

    const fuzzyFuze = new Fuse(this.object, this.fuseOptions);

    return fuzzyFuze.search(locquery) as O[];
  }
}