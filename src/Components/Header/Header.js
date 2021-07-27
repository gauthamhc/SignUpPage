import React from 'react';
import styled from 'styled-components/macro';

const HeaderWrapper = styled.section`
  background-color: #ccc;
  height: 10vh;
  max-width: 1400px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 5rem;
`;
const Logo = styled.h2``;
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
        <Logo>Logo</Logo>
        <Lists>
          <Signed>Sign Up</Signed>
          <Signed>Sign In</Signed>
        </Lists>
      </Header>
    </HeaderWrapper>
  );
};
