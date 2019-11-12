import * as TimeUtils from '../src/TimeUtils';

test('Seconds should be 1000 milliseconds', () => {
  expect(TimeUtils.SECOND).toBe(1000);
});

test('Minutes should be 60 seconds', () => {
  expect(TimeUtils.MINUTE).toBe(TimeUtils.SECOND * 60);
  expect(TimeUtils.MINUTE).toBe(60 * 1000);
});

test('Hours should be 60 minutes', () => {
  expect(TimeUtils.HOUR).toBe(TimeUtils.MINUTE * 60);
  expect(TimeUtils.HOUR).toBe(TimeUtils.SECOND * 60 * 60);
  expect(TimeUtils.HOUR).toBe(60 * 60 * 1000);
});

test('Day should be 24 hours', () => {
  expect(TimeUtils.DAY).toBe(TimeUtils.HOUR * 24);
  expect(TimeUtils.DAY).toBe(TimeUtils.MINUTE * 60 * 24);
  expect(TimeUtils.DAY).toBe(TimeUtils.SECOND * 60 * 60 * 24);
  expect(TimeUtils.DAY).toBe(24 * 60 * 60 * 1000);
});

test('DAYS should be English days of the week', () => {
  expect(TimeUtils.DAYS).toStrictEqual([ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]);
});

test('MONTHS should be English months of the year', () => {
  expect(TimeUtils.MONTHS).toStrictEqual([ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]);
});

test('DAYS_NL should be Dutch days of the week', () => {
  expect(TimeUtils.DAYS_NL).toStrictEqual([ 'Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag' ]);
});

test('MONTHS_NL should be Dutch months of the year', () => {
  expect(TimeUtils.MONTHS_NL).toStrictEqual([ 'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'July', 'Augustus', 'September', 'October', 'November', 'December' ]);
});

test('TimeUtils should match snapshot', () => {
  expect(TimeUtils).toMatchSnapshot();
});