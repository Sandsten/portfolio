import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { DESKTOP_XS, DESKTOP_XL } from '../constants/sizes';
import { BLUE } from '../constants/colors';
import { Spacer } from './projects';

import '../CSSTransitions/transitions.scss';

const StyledHomePage = styled.div`
	display: grid;
	align-content: start;
	grid-row-gap: 20px;

	padding: 20px 0 0 20px;
	font-size: 1em;
	overflow-y: scroll;

	@media (min-width: ${DESKTOP_XS}) {
		font-size: 1.2em;
	}

	@media (min-width: ${DESKTOP_XL}) {
		grid-template-columns: 600px;
	}
`;

export const StyledA = styled.a`
	margin-bottom: 5px;
	text-decoration: none;
	outline: none;
	color: ${BLUE};

	:hover {
		text-decoration: underline;
	}
`;

const Contact = styled.div`
	${StyledA} {
		margin-right: 20px;
	}
`;

const CONTENT = [
	<div>Hello and welcome to my website! </div>,
	<div>
		My bachelor is in{' '}
		<StyledA href="https://www.kth.se/student/kurser/program/TSVDK/20122/mal">
			Simulation Technology and Virtual Design
		</StyledA>{' '}
		at <StyledA href="https://www.kth.se/"> Kungliga Tekniska Högskolan</StyledA>. Which sparked my
		interest for programming and graphics.
	</div>,
	<div>
		My master's is in{' '}
		<StyledA href="https://www.kth.se/en/studies/master/interactivemediatechnology/description-1.593765">
			{' '}
			Interactive Media Technology
		</StyledA>{' '}
		where I focused on visual media. Taking courses in computer graphics, game design, information
		visualization and evaluation methods.
	</div>,
	<div>
		For{' '}
		<StyledA href="https://www.diva-portal.org/smash/record.jsf?dswid=9827&pid=diva2%3A1469206&c=1&searchType=UNDERGRADUATE&language=en&query=&af=%5B%5D&aq=%5B%5B%7B%22author%22%3A%5B%22Sandberg%2C+Staffan%22%5D%7D%5D%5D&aq2=%5B%5B%7B%22dateIssued%22%3A%7B%22from%22%3A%222020%22%2C%22to%22%3A%222020%22%7D%7D%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=true&sf=all">
			my thesis
		</StyledA>{' '}
		I wanted to explore Virtual Reality a bit further, since I had only briefly used it previously
		in one of my courses. Therefore I found a topic where I had to create a driving simulator for
		electic vehicles in VR. In order to test a range critical situation using two different
		dashboards. You can read about the project in a shorter format compared to the article{' '}
		<StyledA href="/projects">here on my website</StyledA>{' '}
	</div>,
	<div>
		In my free time I enjoy playing classical guitar, video games, reading books and learning new
		things in general. One newfount interest is Disc golf which I find very enjoyable and
		meditative.
	</div>,
	<div>
		On this site you can see different projects that I've been a part of and blog posts about things
		I've learnt and want to share.
	</div>,
	<div>You can find and contact me here:</div>,
	<Contact>
		<StyledA href="https://www.linkedin.com/in/stsa/">Linkedin</StyledA>
		<StyledA href="https://github.com/Sandsten">Github</StyledA>
		<StyledA target="_blank" href="mailto:stsand@kth.se" rel="noopener noreferrer">
			Email
		</StyledA>
	</Contact>,
];

const homePage = () => {
	const [shouldAnimate, setShouldAnimate] = useState(true);
	const staggerDelay = 0.02;

	return (
		<StyledHomePage>
			{CONTENT.map((paragraph, i) => {
				return (
					<CSSTransition
						key={i}
						in={shouldAnimate}
						appear={shouldAnimate}
						classNames="fade"
						timeout={500}
						style={{ transitionDelay: `${(i + 1) * staggerDelay}s` }}
					>
						{paragraph}
					</CSSTransition>
				);
			})}
			<Spacer />
		</StyledHomePage>
	);
};

export default homePage;
