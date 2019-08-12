import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import ProjectCard from '../components/ProjectCard';

import { fetchProjects } from '../redux/actions/projectsActions';

import { BASE02, BASE3 } from '../constants/colors';
import { DESKTOP_XS, DESKTOP_XL } from '../constants/sizes';

const StyledProjects = styled.div`
  grid-area: main;
  padding: 20px 10px 0px 10px;
  overflow: scroll;

  height: 100vh;
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

export const Spacer = styled.div`
  height: 20px;
`;

const projects = () => {
  const theme = useSelector(state => state.appSettings.theme);
  const projects = useSelector(state => state.projects.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    // Update to not fetch if we already have all the project in our redux store state
    dispatch(fetchProjects());
  }, []);

  if (!theme) return null;
  if (!projects) return <StyledProjects theme={theme}>Loading projects...</StyledProjects>;

  return (
    <StyledProjects theme={theme}>
      {projects.map(project => {
        return <ProjectCard theme={theme} key={project.title} data={project} />;
      })}
      <Spacer />
    </StyledProjects>
  );
};

export default projects;
