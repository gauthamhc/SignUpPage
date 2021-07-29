import { render, screen } from '@testing-library/react';
import { SignUpPage } from './SignUpPage';

describe('Sign Up page testing', () => {
  test('Sign Up text available', () => {
    render(<SignUpPage />);
    expect(screen.getByText('Sign up to Logo')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Enter your Name')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter your Email Address')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter your password')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Re-enter your password')
    ).toBeInTheDocument();

    expect(screen.getByText('Register')).toBeInTheDocument();
  });
});
