import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import ProjectCard from "../components/ProjectCard";

import { fetchProjects } from "../redux/actions/projectsActions";

import { BASE02, BASE3 } from "../constants/colors";
import { DESKTOP_XS, DESKTOP_XL } from "../constants/sizes";

import "../CSSTransitions/transitions.scss";

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 30px;

  height: 100vh;
  padding: 20px 10px 10px 10px;
  overflow-y: scroll;

  @media (min-width: ${DESKTOP_XS}) {
    padding: 20px 20px 0px 20px;
  }

  @media (min-width: ${DESKTOP_XL}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Spacer = styled.div`
  height: 10px;
`;

const projects = () => {
  const theme = useSelector((state) => state.appSettings.theme);
  const projects = useSelector((state) => state.projects.data);
  const projectsFetched = useSelector((state) => state.projects.fetched);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const dispatch = useDispatch();
  const staggerDelay = 0.02;

  useEffect(() => {
    // Update to not fetch if we already have all the project in our redux store state
    if (!projectsFetched) dispatch(fetchProjects());
  }, []);

  if (!theme) return null;
  if (!projects)
    return <StyledProjects theme={theme}>Loading projects...</StyledProjects>;

  return (
    <StyledProjects>
      {projects.map((project, i) => {
        return (
          <CSSTransition
            key={project._id}
            in={shouldAnimate}
            appear={shouldAnimate}
            classNames="fade"
            timeout={500}
          >
            {/* transition delay has to be passed down to the component for it to work */}
            <ProjectCard
              theme={theme}
              data={project}
              style={{ transitionDelay: `${(i + 1) * staggerDelay}s` }}
            />
          </CSSTransition>
        );
      })}
      <Spacer />
      <Spacer />
    </StyledProjects>
  );
};

export default projects;
