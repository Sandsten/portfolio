import * as React from "react"
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import ProjectCard from '../components/ProjectCard';
import FadeIn from '../components/FadeIn';

import { getProjects } from '../redux-toolkit/slices/projectsSlice';

import { DESKTOP_XS } from '../constants/sizes';

import projectsMetadata from '../Content/Projects/projectsMetadata';

// Mobile first!
const StyledProjects = styled.div`
	grid-area: main;

	display: grid;
	align-content: start;
	grid-template-columns: 1fr;
	grid-row-gap: 20px;

	/* TODO: How do we add padding to the bottom? The final card is flush with the screen edge which I do not want */
	padding: 10px;

	height: 100vh;
	overflow-y: scroll;

	// The following is applied when browser width goes above min-width
	@media (min-width: ${DESKTOP_XS}) {
		padding-left: 15px;
		/* Autofit will create as many columns as will fit within the given max value, without each cell going bellow the min value */
		/* In this case. Create as many columns no smaller than 450 pixels within 1fr of the given space */
		grid-column-gap: 15px;
		grid-row-gap: 15px;
		grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
		/* grid-template-rows: repeat(auto-fit, minmax(200px, 1fr)); */
	}
`;

const projects = () => {
	const projects = useSelector((state) => state.projects);
	// const projectsFetched = useSelector((state) => state.projects.fetched);

	const dispatch = useDispatch();

	useEffect(() => {
		// Update to not fetch if we already have all the project in our redux store state
		if (projects.status == null) dispatch(getProjects());
	}, []);

	if (!projects.data) return <StyledProjects theme={theme}>Loading projects...</StyledProjects>;

	return (
    <StyledProjects>
      {projectsMetadata.map((project) => 
          <ProjectCard
          key={project.title}
          title={project.title}
          thumbnail={project.thumbnail}
          description={project.description}
          tags={project.tags}
          clickURL={project.fullProjectPath}
        />
      )}
      {projects.data.map((project, i) => {
        return (
          <ProjectCard
            key={project.title}
            title={project.title}
            thumbnail={project.bgUrl}
            description={project.descriptionShort}
            tags={['Project', ...project.tools]}
            clickURL={project.localURL}
          />
        );
      })}
    </StyledProjects>
	);
};

export default projects;
