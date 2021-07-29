import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HeaderComp } from './HeaderComp';

describe('Test for Logo, SignUp and SignIn', () => {
  test('test for logo', () => {
    render(
      <BrowserRouter>
        <HeaderComp />
      </BrowserRouter>
    );
    const logoElement = screen.getByText('Logo');
    expect(logoElement).toBeInTheDocument();
  });
});
