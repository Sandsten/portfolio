import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import { PROJECTS } from '../Data';
import { DESKTOP_XS, DESKTOP_XL } from '../constants/sizes';

const StyledProjectPage = styled.div`
  display: grid;
  padding: 20px;
  grid-row-gap: 10px;
  grid-auto-columns: auto;

  @media (min-width: ${DESKTOP_XS}) {
    grid-row-gap: 20px;
    width: 70vw;
  }

  @media (min-width: ${DESKTOP_XL}) {
    grid-row-gap: 20px;
    width: 50vw;
  }
`;
const ProjectTitle = styled.b`
  font-size: 1.3em;
`;
const Link = styled.a``;
const Description = styled.div``;

const projectPage = props => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    setProject(
      PROJECTS.find(project => {
        return project.localURL === props.match.params.name;
      })
    );
    return () => {};
  });

  if (project === undefined) return <Redirect to="/projects" />;
  if (!project) return 'Loading...';

  const website = project.website ? (
    <span>
      Website: <Link href={project.website}>{project.website}</Link>
    </span>
  ) : null;

  const github = project.github ? (
    <span>
      Github: <Link href={project.github}>{project.github}</Link>
    </span>
  ) : null;

  return (
    // Prevent StyledProjectPage from being a direct sibling to the sidebar
    // otherwise its height will match it automatically which we don't want
    <div>
      <StyledProjectPage>
        <ProjectTitle>{project.title}</ProjectTitle>
        <div>{project.date}</div>
        <div>{project.tools.join(', ')}</div>
        <div>Project group size: {project.groupSize}</div>
        <Description>{project.description}</Description>
        {website}
        {github}
      </StyledProjectPage>
    </div>
  );
};

export default projectPage;
