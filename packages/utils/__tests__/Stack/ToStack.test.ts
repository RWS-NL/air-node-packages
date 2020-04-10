import { Stack } from '../../src/Stack/Stack';
import { toStack } from '../../src/Stack/ToStack';

describe('toStack', () => {
  test('GIVEN array of integers AND key/value extractors THEN indexes values by key', () => {
    const input = [1, 2, 3, 13];

    const result = toStack(
      input,
      (i) => i % 10,
      (i) => i + 10
    );

    expect(result).toStrictEqual(
      new Stack([
        [1, 11],
        [2, 12],
        [3, 23] // 3 and 13 conflict, last one wins.
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

    const humansGroupedByGender = toStack<Human, HumanGenders, Human>(
      humans,
      (h) => h.gender,
      (h) => h
    ); // Stack<HumanGenders, Human>

    expect(humansGroupedByGender.size).toBe(2);
    expect(humansGroupedByGender.get('male')).toMatchObject<Human>(humans[2]);
    expect(humansGroupedByGender.get('female')).toMatchObject<Human>(humans[1]);
    expect(humansGroupedByGender.array()).not.toContainEqual<Human>(humans[0]);
  });
});
