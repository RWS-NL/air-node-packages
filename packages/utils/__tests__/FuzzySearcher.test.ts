import { FuzzySearcher } from '../src/FuzzySearcher';
import { toBeCalled } from '../src/Testing/ToBeCalled';

const SAMPLE_DATA = [
  {
    firstname: 'John',
    lastname: 'Connor'
  },
  {
    firstname: 'Sarah',
    lastname: 'Connor'
  },
  {
    firstname: 'Johan',
    lastname: 'Connor'
  }
];

describe('FuzzySearcher', () => {
  test('calls the runFuzzy function with query "john" AND returns 1 result', () => {
    const fuzzySearcher = new FuzzySearcher(SAMPLE_DATA, ['firstname']);
    const mock = jest.spyOn(fuzzySearcher, 'runFuzzy');

    const result = fuzzySearcher.runFuzzy('john');

    toBeCalled(mock, 1, 'john');
    expect(result).toStrictEqual([{ item: { firstname: 'John', lastname: 'Connor' }, refIndex: 0 }]);
    expect(result).toMatchSnapshot();
  });

  test('supports custom options', () => {
    const fuzzySearcher = new FuzzySearcher(SAMPLE_DATA, ['firstname'], { threshold: 0.6 });
    const mock = jest.spyOn(fuzzySearcher, 'runFuzzy');

    const result = fuzzySearcher.runFuzzy('john');

    toBeCalled(mock, 1, 'john');
    expect(result).toStrictEqual([
      { item: { firstname: 'John', lastname: 'Connor' }, refIndex: 0 },
      { item: { firstname: 'Johan', lastname: 'Connor' }, refIndex: 2 }
    ]);
    expect(result).toMatchSnapshot();
  });
});
