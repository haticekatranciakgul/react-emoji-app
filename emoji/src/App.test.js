import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders emoji search app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Emoji Search/i);
  expect(linkElement).toBeInTheDocument();
});

test('filters emojis based on search input', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText('search');
  fireEvent.change(searchInput, { target: { value: 'smile' } });

  const emojiTitle = screen.getByText(/smile/i);
  expect(emojiTitle).toBeInTheDocument();
});