import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const SignUpPageWrapper = styled.div`
  background-color: #f4f4;
  padding: 04rem;
  width: 600px;
  margin: 0 auto;
  border-radius: 14px;
`;

const FontClose = styled.div`
  color: #000;
`;

const SignUpHeader = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`;
const SignUpForm = styled.form`
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
  background-color: #f4f8;
  outline: none;
`;

export const SignUpPage = () => {
  return (
    <SignUpPageWrapper>
      <FontClose>
        <FontAwesomeIcon icon="fa-solid fa-square-xmark" />
      </FontClose>
      <SignUpHeader>Please complete the details to Sign Up</SignUpHeader>
      <SignUpForm>
        <Input type="text" placeholder="Enter your Name" />
        <Input type="text" placeholder="Enter your Email Address" />
        <Input type="text" placeholder="Enter your phone number" />
        <SignUpButton>Submit</SignUpButton>
      </SignUpForm>
    </SignUpPageWrapper>
  );
};
