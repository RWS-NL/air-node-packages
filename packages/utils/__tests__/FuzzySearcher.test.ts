import FuzzySearcher from '../src/FuzzySearcher';

const SAMPLE_DATA = [
  {
    firstname: 'John',
    lastname: 'Connor',
  },
  {
    firstname: 'Sarah',
    lastname: 'Connor',
  },
  {
    firstname: 'Johan',
    lastname: 'Connor',
  }
];

describe('FuzzySearcher', () => {
  test('calls the runFuzzy function with query "john" AND returns 1 result', () => {
    const fuzzySearcher = new FuzzySearcher(SAMPLE_DATA, [ 'firstname' ]);
    const mock = jest.spyOn(fuzzySearcher, 'runFuzzy');

    const result = fuzzySearcher.runFuzzy('john');

    expect(mock).toHaveBeenCalledWith('john');
    expect(mock).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(
      [
        {
          firstname: 'John',
          lastname: 'Connor',
        }
      ]
    );
  });

  test('supports custom options', () => {
    const fuzzySearcher = new FuzzySearcher(SAMPLE_DATA, [ 'firstname' ], { threshold: 0.6 });
    const mock = jest.spyOn(fuzzySearcher, 'runFuzzy');

    const result = fuzzySearcher.runFuzzy('john');

    expect(mock).toHaveBeenCalledWith('john');
    expect(mock).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(
      [
        {
          firstname: 'John',
          lastname: 'Connor',
        },
        {
          firstname: 'Johan',
          lastname: 'Connor',
        }
      ]
    );
  });
});