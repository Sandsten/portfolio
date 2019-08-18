import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { fetchProjects } from '../redux/actions/projectsActions';

import { DESKTOP_XS, DESKTOP_XL } from '../constants/sizes';
import { BLUE } from '../constants/colors';

import '../CSSTransitions/transitions.scss';

const StyledProjectPage = styled.div`
  display: block;
  padding: 20px;
  word-break: break-word;
  min-height: 100vh;

  @media (min-width: ${DESKTOP_XS}) {
    width: 70vw;
  }

  @media (min-width: ${DESKTOP_XL}) {
    width: 50vw;
  }
`;
const ProjectTitle = styled.b`
  font-size: 1.4em;
`;
const Link = styled.a`
  color: ${p => (p.theme === 'LIGHT' ? '' : BLUE)};
`;

const projectPage = props => {
  // const [project, setProject] = useState(null);
  const theme = useSelector(state => state.appSettings.theme);
  const project = useSelector(state => {
    if (!state.projects.projects) return null;
    // Find the correct project in the redux state
    return state.projects.projects.find(project => {
      return project.localURL === props.match.params.name;
    });
  });
  const projectsFetched = useSelector(state => state.projects.fetched);
  const dispatch = useDispatch();
  const staggerDelay = 0.02;

  useEffect(() => {
    // If project wasn't in the redux state, fetch from database
    if (!projectsFetched) dispatch(fetchProjects());

    //TODO: Opportunity for slight optimization, if refreshing on project page, only fetch that specific project
    // if (!project) {
    //   dispatch(fetchProject(props.match.params.name));
    // }
  }, []);

  if (project === undefined) return <Redirect to="/projects" />;
  if (!project) return <StyledProjectPage style={{ height: '100vh' }}>'Loading...'</StyledProjectPage>;
  if (!theme) return null;

  const website = project.website ? (
    <p>
      Website: <Link href={project.website}>{project.website}</Link>
    </p>
  ) : null;

  const github = project.github ? (
    <p>
      Github: <Link href={project.github}>{project.github}</Link>
    </p>
  ) : null;

  const CONTENT = [
    <ProjectTitle>{project.title}</ProjectTitle>,
    <p>{project.date}</p>,
    <p>{project.tools.join(', ')}</p>,
    <p>Project group size: {project.groupSize}</p>,
    <p>{project.description}</p>,
    website,
    github
  ];

  return (
    // Prevent StyledProjectPage from being a direct sibling to the sidebar
    // otherwise its height will match it automatically which we don't want
    <StyledProjectPage theme={theme}>
      {CONTENT.map((text, i) => {
        if (!text) return null; // Prevent github/website to try and render with cssTransition if they are null
        console.log(text);
        return (
          <CSSTransition
            key={i}
            in={true}
            appear={true}
            classNames="fade"
            timeout={500}
            style={{ transitionDelay: `${(i + 1) * staggerDelay}s` }}
          >
            {text}
          </CSSTransition>
        );
      })}
    </StyledProjectPage>
  );
};

export default projectPage;
