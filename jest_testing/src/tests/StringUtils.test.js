import capitalize from '../components/StringUtils';

describe('StringUtils - capitalize', () => {
  test('capitalizes a lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('capitalizes a mixed-case word', () => {
    expect(capitalize('wOrLd')).toBe('World');
  });

  test('returns an empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });

  test('throws when input is not a string', () => {
    expect(() => capitalize(123)).toThrow(TypeError);
  });
});
