import React from 'react';
import styled from 'styled-components';

import Project from '../components/Project';
import { BASE00, BASE01, BASE3 } from '../constants/colors';

import { PROJECTS } from '../Data';

const StyledProjects = styled.div`
  grid-area: main;
  padding: 50px 20px 0px 20px;
  overflow: scroll;

  display: grid;

  background-color: ${BASE3};
`;

//TODO: Get projects from database
const renderProjects = () => {
  return PROJECTS.map(project => {
    return <Project key={project.title} data={project} />;
  });
};

const projects = () => {
  return <StyledProjects>{renderProjects()}</StyledProjects>;
};

export default projects;
