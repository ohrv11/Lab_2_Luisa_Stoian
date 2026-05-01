import DateDifferenceUtils from '../components/DateDifferenceUtils';

describe('DateDifferenceUtils - daysBetween', () => {
  test('returns 0 for the same date', () => {
    expect(DateDifferenceUtils.daysBetween('2025-06-15', '2025-06-15')).toBe(0);
  });

  test('returns 1 for consecutive dates', () => {
    expect(DateDifferenceUtils.daysBetween('2025-06-15', '2025-06-16')).toBe(1);
  });

  test('returns the same result regardless of argument order', () => {
    expect(DateDifferenceUtils.daysBetween('2025-06-16', '2025-06-15')).toBe(1);
  });

  test('handles month boundaries correctly', () => {
    expect(DateDifferenceUtils.daysBetween('2025-06-30', '2025-07-02')).toBe(2);
  });

  test('handles leap-year date ranges correctly', () => {
    expect(DateDifferenceUtils.daysBetween('2020-02-28', '2020-03-01')).toBe(2);
  });

  test('throws when a date is not a string', () => {
    expect(() => DateDifferenceUtils.daysBetween(20250615, '2025-06-16')).toThrow(TypeError);
  });

  test('throws when a date is not a valid ISO string', () => {
    expect(() => DateDifferenceUtils.daysBetween('06/15/2025', '2025-06-16')).toThrow(TypeError);
  });
});
