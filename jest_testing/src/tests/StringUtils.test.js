import capitalize from '../components/StringUtils';

describe('StringUtils - capitalize', () => {
  describe('valid string inputs', () => {
    test.each([
      ['hello', 'Hello'],
      ['wOrLd', 'World'],
      ['', ''],
      ['a', 'A'],
      ['A', 'A'],
    ])('capitalize("%s") = "%s"', (input, expected) => {
      expect(capitalize(input)).toBe(expected);
    });
  });

  describe('error handling', () => {
    test('throws when input is not a string', () => {
      expect(() => capitalize(123)).toThrow(TypeError);
    });

    test('throws when input is null', () => {
      expect(() => capitalize(null)).toThrow(TypeError);
    });
  });
});
