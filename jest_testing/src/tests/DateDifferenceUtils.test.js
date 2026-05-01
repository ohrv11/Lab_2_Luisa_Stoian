import DateDifferenceUtils from '../components/DateDifferenceUtils';

describe('DateDifferenceUtils - daysBetween', () => {
  describe('valid date pairs', () => {
    test.each([
      ['2025-06-15', '2025-06-15', 0],
      ['2025-06-15', '2025-06-16', 1],
      ['2025-06-16', '2025-06-15', 1],
      ['2025-06-30', '2025-07-02', 2],
      ['2024-12-31', '2025-01-01', 1],
      ['2020-02-28', '2020-03-01', 2],
    ])('daysBetween("%s", "%s") = %i', (d1, d2, expected) => {
      expect(DateDifferenceUtils.daysBetween(d1, d2)).toBe(expected);
    });
  });

  describe('error handling', () => {
    test('throws when first argument is not a string', () => {
      expect(() => DateDifferenceUtils.daysBetween(20250615, '2025-06-16')).toThrow(TypeError);
    });

    test('throws when date is not a valid ISO string', () => {
      expect(() => DateDifferenceUtils.daysBetween('06/15/2025', '2025-06-16')).toThrow(TypeError);
    });
  });
});
