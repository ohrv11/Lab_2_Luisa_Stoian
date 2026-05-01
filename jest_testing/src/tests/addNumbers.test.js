import addNumbers from '../components/NumericMethod';

describe('NumericMethod - addNumbers', () => {
  describe('valid number pairs', () => {
    test.each([
      [2, 3, 5],
      [-5, -3, -8],
      [10, -4, 6],
      [5, 0, 5],
      [0, 0, 0],
      [-1, 0, -1],
      [0, 1, 1],
      [1.5, 2.5, 4],
      [1000000, 2000000, 3000000],
    ])('addNumbers(%i, %i) = %i', (a, b, expected) => {
      expect(addNumbers(a, b)).toBe(expected);
    });
  });

  describe('error handling', () => {
    test('throws when first argument is not a number', () => {
      expect(() => addNumbers('2', 3)).toThrow(TypeError);
    });

    test('throws when second argument is not a number', () => {
      expect(() => addNumbers(2, '3')).toThrow(TypeError);
    });
  });
});
