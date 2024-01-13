import * as React from "react"
import styled from 'styled-components';

import { Loading } from "../../Components/StateIndicators";
import ProjectCard from '../../Components/ProjectCard';
import { Container } from "../../Components/Layout";

import { DESKTOP_XS, DESKTOP_XL } from '../../Constants/sizes';

import projectsMetadata from '../../projects.json';

// Mobile first!
const StyledProjects = styled.div`
	display: grid;
	align-content: start;
	grid-template-columns: 1fr;
	grid-row-gap: 20px;

  // IMPORTAN.webpT: Don't set 100vh here! It's already done in the main container
  // If we set it here too there's a weird effect that occurs.
	/* heigh.webpt: 100vh; */
  
  margin-bottom: 10px;

	// The following is applied when browser width goes above min-width
	@media (min-width: ${DESKTOP_XS}) {
		/* Autofit will create as many columns as will fit within the given max value, without each cell going bellow the min value */
		/* In this case. Create as many columns no smaller than 450 pixels within 1fr of the given space */
		grid-column-gap: 15px;
		grid-row-gap: 15px;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		/* grid-template-row.webps: repeat(auto-fit, minmax(200px, 1fr)); */
	}
  
  @media (min-width: ${DESKTOP_XL}) {
    /* max-width: 1000px; */
  }
`;


const projects = () => {
  if (projectsMetadata == null) return <Loading>Loading...</Loading>;

  return (
    <Container>
      <StyledProjects>
        {projectsMetadata.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              project={project}
            />
          );
        })}
      </StyledProjects>
    </Container>
  );
};

export default projects;