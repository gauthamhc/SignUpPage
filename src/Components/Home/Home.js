import React from 'react';
import styled from 'styled-components/macro';

const HomeWrapper = styled.section`
  max-width: 1400px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 05rem;
  font-weight: 300;
  letter-spacing: 5px;
  color: #e52165;
`;

export const HomeComp = () => {
  return <HomeWrapper>Welcome</HomeWrapper>;
};
