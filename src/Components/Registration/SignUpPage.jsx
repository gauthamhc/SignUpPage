import React from 'react';
import styled from 'styled-components/macro';

const SignUpPageWrapper = styled.div`
  background-color: #f5f0e1;
  padding: 04rem;
  width: 600px;
  margin: 2rem auto 0;
  border-radius: 14px;
  position: relative;
`;

// const FontClose = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 14px;
//   padding: 0.2rem 1.2rem;
//   margin-right: 2rem;
//   margin-top: 0.5rem;
//   color: #000;
//   position: absolute;
//   top: 0;
//   right: 0;
//   cursor: pointer;
// `;

const SignUpHeader = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
  color: #1e3d59;
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
  background-color: #1e3d59;
  outline: none;
  font-size: 1.2em;
  font-weight: 600;
  color: #f6f6f6;
`;

export const SignUpPage = ({ OffSignUp }) => {
  const takeAction = () => {
    OffSignUp();
  };
  return (
    <SignUpPageWrapper>
      {/* <FontClose onClick={takeAction}>
        <FontAwesomeIcon icon="check-square" />
        Close
      </FontClose> */}
      <SignUpHeader>Sign up to Logo</SignUpHeader>
      <SignUpForm>
        <Input type="text" placeholder="Enter your Name" />
        <Input type="text" placeholder="Enter your Email Address" />
        <Input type="password" placeholder="Enter your password" />
        <Input type="password" placeholder="Re-enter your password" />
        <SignUpButton>Register</SignUpButton>
      </SignUpForm>
    </SignUpPageWrapper>
  );
};
