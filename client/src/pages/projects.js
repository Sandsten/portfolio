import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import ProjectCard from '../components/ProjectCard';

import { getProjects } from '../redux-toolkit/slices/projectsSlice';

import { BASE02, BASE3 } from '../constants/colors';
import { DESKTOP_XS, DESKTOP_XL } from '../constants/sizes';

import '../CSSTransitions/transitions.scss';

const StyledProjects = styled.div`
	display: grid;
	/* Autofit will create as many columns as will fit within the given max value, without each cell going bellow the min value */
	/* In this case. Create as many columns no smaller than 450 pixels within 1fr of the given space */
	/* grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); */
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	// Make the rows always 200px tall
	grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
	height: 100vh;
	grid-row-gap: 20px;
	grid-column-gap: 30px;

	/* height: 100vh; */
	padding: 20px 10px 10px 10px;
	overflow-y: scroll;

	grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
	@media (min-width: ${DESKTOP_XS}) {
		padding: 20px 20px 0px 20px;
	}
`;

export const Spacer = styled.div`
	height: 10px;
`;

const projects = () => {
	const projects = useSelector((state) => state.projects);
	// const projectsFetched = useSelector((state) => state.projects.fetched);

	const [shouldAnimate, setShouldAnimate] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		// Update to not fetch if we already have all the project in our redux store state
		if (projects.status == null) dispatch(getProjects());
	}, []);

	if (!projects.data) return <StyledProjects theme={theme}>Loading projects...</StyledProjects>;

	return (
		<StyledProjects>
			{projects.data.map((project, i) => {
				return (
					<CSSTransition
						key={project._id}
						in={shouldAnimate}
						appear={shouldAnimate}
						classNames="fade"
						timeout={500}
					>
						{/* transition delay has to be passed down to the component for it to work */}
						<ProjectCard data={project} />
					</CSSTransition>
				);
			})}
			<Spacer />
			<Spacer />
		</StyledProjects>
	);
};

export default projects;
