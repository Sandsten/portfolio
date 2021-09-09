import * as React from "react"
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Loading, LoadingFailed } from "../../Components/StateIndicators";
import ProjectCard from '../../Components/ProjectCard';
import { Container } from "../styledComponents";

import { getProjects } from '../../Redux/slices/projectsSlice';

import { DESKTOP_XS } from '../../Constants/sizes';

import projectsMetadata from '../Projects/projectsMetadata';

// Mobile first!
const StyledProjects = styled.div`
	display: grid;
	align-content: start;
	grid-template-columns: 1fr;
	grid-row-gap: 20px;

  // IMPORTANT: Don't set 100vh here! It's already done in the main container
  // If we set it here too there's a weird effect that occurs.
	/* height: 100vh; */
  
  margin-bottom: 10px;

	// The following is applied when browser width goes above min-width
	@media (min-width: ${DESKTOP_XS}) {
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
		if (projects.status == "initialized") dispatch(getProjects());
	}, []);

  // With redux projects.status is initialized as null. It's never undefined
  if (projects.status == "loading" || projects.status == "initialized") return <Loading>Loading...</Loading>;
  if (projects.status == "failed") return <LoadingFailed>Failed to find projects :( Try refresing the page</LoadingFailed>;

	return (
    <Container>
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
    </Container>
	);
};

export default projects;
