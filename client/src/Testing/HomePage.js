import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  grid-area: main;
  justify-self: center;
  max-height: 100vh;
  overflow-y: scroll;
  background-color: #f1f2f0;
`;

const Projects = styled.div`
  display: grid;
  margin: 10px;
`;

export default function HomePage() {
  return (
    <Content>
      <Projects />
    </Content>
  );
}
