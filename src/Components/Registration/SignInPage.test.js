import { render, screen } from '@testing-library/react';
import { SignInPage } from './SignInPage';

describe('Sign Up page testing', () => {
  test('Sign Up text available', () => {
    render(<SignInPage />);
    expect(screen.getByText('Sign in to Logo')).toBeInTheDocument();
    expect(screen.getByText('ForgotPassword ?')).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('Enter your email-address')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter your password')
    ).toBeInTheDocument();

    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
