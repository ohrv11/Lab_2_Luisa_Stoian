import DateUtils from '../components/DateUtils';

describe('DateUtils - isValidISODate', () => {
  test('validates a correct ISO date', () => {
    expect(DateUtils.isValidISODate('2024-12-31')).toBe(true);
  });

  test('rejects an invalid month', () => {
    expect(DateUtils.isValidISODate('2024-13-01')).toBe(false);
  });

  test('rejects an invalid day', () => {
    expect(DateUtils.isValidISODate('2024-02-30')).toBe(false);
  });

  test('rejects a non-string input', () => {
    expect(() => DateUtils.isValidISODate(20241231)).toThrow(TypeError);
  });

  test('rejects a malformed ISO string', () => {
    expect(DateUtils.isValidISODate('12/31/2024')).toBe(false);
  });
});
