import addNumbers from '../components/NumericMethod';

describe('NumericMethod - addNumbers', () => {
  test('should add two positive numbers', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  test('should add two negative numbers', () => {
    expect(addNumbers(-5, -3)).toBe(-8);
  });

  test('should add a positive and negative number', () => {
    expect(addNumbers(10, -4)).toBe(6);
  });

  test('should add zero to a number', () => {
    expect(addNumbers(5, 0)).toBe(5);
  });

  test('should add two zeros', () => {
    expect(addNumbers(0, 0)).toBe(0);
  });

  test('should add decimal numbers', () => {
    expect(addNumbers(1.5, 2.5)).toBe(4);
  });

  test('should handle large numbers', () => {
    expect(addNumbers(1000000, 2000000)).toBe(3000000);
  });
});
