import { groupBy } from '../../src/Stack/GroupBy';
import { Stack } from '../../src/Stack/Stack';

describe('groupBy', () => {
  test('GIVEN array of integers AND key/value extractors THEN groups extracted values by key', () => {
    const input = [1, 2, 3, 4];

    const result = groupBy(
      input,
      (i) => i % 2 === 0,
      (i) => i + 10
    );

    expect(result).toStrictEqual(
      new Stack([
        [true, [12, 14]],
        [false, [11, 13]]
      ])
    );
  });

  test('GIVEN data from example THEN should validate all modifications', () => {
    type HumanGenders = 'male' | 'female' | 'unknown';

    interface Human {
      id: number;
      name: string;
      age: number;
      gender: HumanGenders;
    }

    const humans: Human[] = [
      { id: 1, name: 'John Connor', age: 9001, gender: 'male' },
      { id: 2, name: 'Sarah Connor', age: 300, gender: 'female' },
      { id: 3, name: 'Luke Skywalker', age: 30, gender: 'male' }
    ];

    const humansGroupedByGender = groupBy<Human, HumanGenders, Human>(
      humans,
      (h) => h.gender,
      (h) => h
    ); // Stack<HumanGenders, Human[]>

    expect(humansGroupedByGender.size).toBe(2);
    expect(humansGroupedByGender.get('male')?.length).toBe(2);
    expect(humansGroupedByGender.get('female')?.length).toBe(1);
    expect(humansGroupedByGender.get('male')?.[0]).toMatchObject<Human>(humans[0]);
    expect(humansGroupedByGender.get('male')?.[1]).toMatchObject<Human>(humans[2]);
    expect(humansGroupedByGender.get('female')?.[0]).toMatchObject<Human>(humans[1]);
  });
});
