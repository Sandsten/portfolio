import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { DESKTOP_XS, DESKTOP_XL } from '../../Constants/sizes';

import projectsMetadata from '../../projects';

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
	// Find the project that match the url and show the info.
	// This is temporary before all the projects have their own page.
	const project = projectsMetadata.filter((project => {
		if(props.match.params.name === project.page) {
			return true
		}
		return false
	}))[0];

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
		website = <p>Website: discontinued</p>;
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
