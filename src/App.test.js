import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Where amoos trik yew inta dooin thurr chores/i);
  expect(titleElement).toBeInTheDocument();
});
