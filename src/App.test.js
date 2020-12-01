import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header with the image for the app', () => {
  render(<App />);
  const imageHeaderElement = screen.getByTestId(/pageHeader_titleImage/i);
  expect(imageHeaderElement).toBeInTheDocument();
});