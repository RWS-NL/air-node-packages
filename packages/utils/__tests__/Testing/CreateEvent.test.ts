import { createEvent } from '../../src/Testing/CreateEvent';

describe('createEvent', () => {
  test('GIVEN value THEN should return event with value', () => {
    expect(createEvent(5)).toMatchObject({
      target: {
        value: 5
      }
    });
  });

  test('GIVEN additionalData THEN merges it in', () => {
    expect(createEvent(5, { key: 'value' })).toMatchObject({
      target: {
        value: 5
      },
      key: 'value'
    });
  });

  test('GIVEN additionalData with overwrites THEN overwrites defaults', () => {
    expect(createEvent(5, { target: { value: 6, anotherValue: 5 } })).toMatchObject({
      target: {
        value: 6,
        anotherValue: 5
      }
    });
  });
});
