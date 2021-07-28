import React from 'react';
import styled from 'styled-components/macro';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const HeaderWrapper = styled.section`
  background-color: #0d1137;
  height: 10vh;
  max-width: 1400px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 5rem;
`;
const Logo = styled.h2`
  color: #e52165;
`;
const Lists = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Signed = styled.button`
  margin: 0 1rem;
  padding: 0.8em 1.8em;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  letter-spacing: 2px;
`;

export const HeaderComp = () => {
  return (
    <HeaderWrapper>
      <Header>
        <Link to="/">
          <Logo>Logo</Logo>
        </Link>
        <Lists>
          <Link to="/sign-up">
            <Signed>Sign Up</Signed>
          </Link>

          <Link to="/sign-in">
            <Signed>Sign In</Signed>
          </Link>
        </Lists>
      </Header>
    </HeaderWrapper>
  );
};
