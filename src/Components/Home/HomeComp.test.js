import { render, screen } from '@testing-library/react';
import { HomeComp } from './index';

test('renders Welcome screen', () => {
  render(<HomeComp />);
  const welcomeElement = screen.getByText('Welcome');
  expect(welcomeElement).toBeInTheDocument();
});
