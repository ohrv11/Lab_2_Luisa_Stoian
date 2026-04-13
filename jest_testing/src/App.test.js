import { render, screen } from '@testing-library/react';
import App from './App';
import addNumbers from './components/NumericMethod';

test('renders learn react link', () => {
  render(<App />);
  render(<addNumbers />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
