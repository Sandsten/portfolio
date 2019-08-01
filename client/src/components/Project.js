import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`
  height: 100px;
`;

const project = props => {
  const { title } = props.data;

  return <StyledProject>{title}</StyledProject>;
};

export default project;
