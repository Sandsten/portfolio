import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ProjectCard from '../components/ProjectCard';
import { BASE02, BASE01, BASE3, BASE2, BASE1, BASE0 } from '../constants/colors';
import { DESKTOP_XS, DESKTOP_XL } from '../constants/sizes';

import { PROJECTS } from '../Data';

const StyledProjects = styled.div`
  grid-area: main;
  padding: 20px 10px 0px 10px;
  overflow: scroll;

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 30px;

  background-color: ${p => (p.theme === 'LIGHT' ? BASE3 : BASE02)};

  @media (min-width: ${DESKTOP_XS}) {
    padding: 20px 20px 0px 20px;
  }

  @media (min-width: ${DESKTOP_XL}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Spacer = styled.div`
  height: 20px;
`;

//TODO: Get projects from database
const renderProjects = () => {
  return;
};

const projects = () => {
  const theme = useSelector(state => state.appSettings.theme);
  return (
    <StyledProjects theme={theme}>
      {PROJECTS.map(project => {
        return <ProjectCard theme={theme} key={project.title} data={project} />;
      })}
      <Spacer />
    </StyledProjects>
  );
};

export default projects;
