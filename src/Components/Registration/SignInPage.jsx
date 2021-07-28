import React from 'react';
import styled from 'styled-components/macro';

const SignInPageWrapper = styled.div`
  background-color: #f5f0e1;
  padding: 04rem;
  width: 600px;
  margin: 2rem auto 0;
  border-radius: 14px;
  position: relative;
`;

const SignInHeader = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
  color: #1e3d59;
`;
const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  margin: 0.5rem auto;
  padding: 0.8em;
  border-radius: 14px;
  border: none;
  width: 80%;

  &:focus {
    outline: none;
  }
`;

const SignUpButton = styled.button`
  display: inline-block;
  margin: 0.8rem auto 0;
  padding: 0.8em 1.8em;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  width: 40%;
  background-color: #1e3d59;
  outline: none;
  font-size: 1.2em;
  font-weight: 600;
  color: #f6f6f6;
`;

export const SignInPage = () => {
  return (
    <SignInPageWrapper>
      <SignInHeader>Sign in to Logo</SignInHeader>
      <SignInForm>
        <Input type="text" placeholder="Enter your email-address" />
        <Input type="text" placeholder="Enter your password" />
        <SignUpButton>Submit</SignUpButton>
      </SignInForm>
    </SignInPageWrapper>
  );
};
