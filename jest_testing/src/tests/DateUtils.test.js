import DateUtils from '../components/DateUtils';

describe('DateUtils - isValidISODate', () => {
  describe('valid ISO dates', () => {
    test.each([
      ['2024-12-31'],
      ['2024-02-29'],
      ['2025-04-30'],
    ])('isValidISODate("%s") = true', (date) => {
      expect(DateUtils.isValidISODate(date)).toBe(true);
    });
  });

  describe('invalid ISO dates', () => {
    test.each([
      ['2024-02-30'],
      ['2024-13-01'],
      ['2025-02-29'],
      ['2025-04-31'],
      ['12/31/2024'],
    ])('isValidISODate("%s") = false', (date) => {
      expect(DateUtils.isValidISODate(date)).toBe(false);
    });
  });

  describe('error handling', () => {
    test('throws when input is not a string', () => {
      expect(() => DateUtils.isValidISODate(20241231)).toThrow(TypeError);
    });
  });
});
