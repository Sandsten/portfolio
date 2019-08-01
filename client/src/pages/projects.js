import React from 'react';
import styled from 'styled-components';

import ProjectCard from '../components/ProjectCard';
import { BASE00, BASE01, BASE3 } from '../constants/colors';

import { PROJECTS } from '../Data';

const StyledProjects = styled.div`
  grid-area: main;
  padding: 100px 20px 0px 20px;
  overflow: scroll;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px;

  background-color: ${BASE3};

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

//TODO: Get projects from database
const renderProjects = () => {
  return PROJECTS.map(project => {
    return <ProjectCard key={project.title} data={project} />;
  });
};

const projects = () => {
  return <StyledProjects>{renderProjects()}</StyledProjects>;
};

export default projects;
