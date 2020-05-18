import Fuse from 'fuse.js';

export class FuzzySearcher<O> {
  private readonly object: O[];
  private readonly fuseOptions?: Fuse.IFuseOptions<unknown>;

  constructor(obj: O[], keys: string[], options?: Fuse.IFuseOptions<unknown>) {
    this.object = obj;
    this.fuseOptions = {
      threshold: 0.2,
      ...options,
      keys
    };
  }

  public runFuzzy(query: string) {
    const locquery = query.toLowerCase();

    const fuzzyFuze = new Fuse(this.object, this.fuseOptions);

    return fuzzyFuze.search<O>(locquery);
  }
}
