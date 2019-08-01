import React from 'react';
import styled from 'styled-components';

import Project from '../components/Project';

const StyledProjects = styled.div`
  grid-area: main;
  padding: 50px 20px 0px 20px;
  height: 100vh;
  overflow: scroll;

  display: grid;

  background-color: white;
`;

export default function projects() {
  return (
    <StyledProjects>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </StyledProjects>
  );
}
