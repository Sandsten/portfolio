import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { DESKTOP_XS, DESKTOP_XL } from '../../Constants/sizes';

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
const StyledA = styled.a`
	color: ${(p) => p.theme.colors.LINK_1};
`;
const StyledLink = styled(Link)`
	color: ${(p) => p.theme.colors.LINK_1};
`;

const projectPage = (props) => {
	// const [project, setProject] = useState(null);
	const project = useSelector((state) => {
		if (!state.projects.data) return null;
		// Find the correct project in the redux state
		return state.projects.data.find((project) => {
			return project.localURL === props.match.params.name;
		});
	});
	const projectsFetched = useSelector((state) => state.projects.fetched);
	const dispatch = useDispatch();
	const staggerDelay = 0.02;

	useEffect(() => {
		// If project wasn't in the redux state, fetch from database
		// if (!projectsFetched) dispatch(fetchProjects());
		//TODO: Opportunity for slight optimization, if refreshing on project page, only fetch that specific project
		// if (!project) {
		//   //dispatch(fetchProject(props.match.params.name));
		// }
	}, []);

	// if (project === undefined) return <Navigate to="/projects" />;

	// If projects haven't loaded yet
	if (!project)
		return <StyledProjectPage style={{ height: '100vh' }}>'Loading...'</StyledProjectPage>;

	var website = project.website ? (
		<p>
			Website: <StyledA href={project.website}>{project.website}</StyledA>
		</p>
	) : null;

	if (project.website === '/shaders') {
		website = (
			<p>
				Website: <StyledLink to="/shaders">Shader</StyledLink>
			</p>
		);
	} else if (project.website === 'http://bandmate.xyz') {
		website = <p>Website: currently down</p>;
	}
	const github = project.github ? (
		<p>
			Github: <StyledA href={project.github}>{project.github}</StyledA>
		</p>
	) : null;

	return (
		<StyledProjectPage>
			<ProjectTitle>{project.title}</ProjectTitle>
			<p>{project.date}</p>
			<p>{project.tools.join(', ')}</p>
			<p>Project group size: {project.groupSize}</p>
			<p>{project.description}</p>
			{website}
			{github}
		</StyledProjectPage>
	);
};

export default projectPage;
