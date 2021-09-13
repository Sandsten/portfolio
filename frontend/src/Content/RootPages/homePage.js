import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Container, Paragraph } from '../styledComponents';

import { DARK_THEME } from '../../Constants/colors';

// TODO: Apply the same style to both span and a without repeating!
export const StyledLink = styled.span`
	background: -webkit-linear-gradient(${DARK_THEME.LINK_1}, ${DARK_THEME.LINK_2});
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	:hover {
		background: -webkit-linear-gradient(${DARK_THEME.LINK_2}, ${DARK_THEME.LINK_1});
		cursor: pointer;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

export const StyledA = styled.a`
	text-decoration: none;
	outline: none;

	background: -webkit-linear-gradient(${DARK_THEME.LINK_1}, ${DARK_THEME.LINK_2});
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	background-color: black;
	padding: 5px;
	border-radius: 10px;

	:hover {
		background: -webkit-linear-gradient(${DARK_THEME.LINK_2}, ${DARK_THEME.LINK_1});
		cursor: pointer;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

const ContactContainer = styled.div`
	font-size: 1.3em;
`;

const Contact = () => {
	return (
		<ContactContainer>
			<StyledA href="https://www.linkedin.com/in/stsa/">Linkedin </StyledA>
			<StyledA href="https://github.com/Sandsten">Github </StyledA>
			<StyledA target="_blank" href="mailto:stsand@kth.se" rel="noopener noreferrer">
				Email
			</StyledA>
		</ContactContainer>
	);
};

const LinkInternal = ({ text, handleNav, route }) => {
	return (
		<StyledLink
			onClick={() => {
				handleNav(route);
			}}
		>
			{text}
		</StyledLink>
	);
};

const homePage = () => {
	const [shouldAnimate] = useState(true);
	const history = useHistory();
	const handleNav = (route) => history.push(route);

	return (
		<Container>
			<Paragraph>Hello and welcome to my website!</Paragraph>
			<Paragraph>
				My bachelor is in{' '}
				<StyledA href="https://www.kth.se/student/kurser/program/TSVDK/20122/mal">
					Simulation Technology and Virtual Design
				</StyledA>{' '}
				at <StyledA href="https://kth.se">Kungliga Tekniska Högskolan</StyledA>. Which sparked my
				interest for programming and graphics.
			</Paragraph>

			<Paragraph>
				My master's is in{' '}
				<StyledA href="https://www.kth.se/en/studies/master/interactivemediatechnology/description-1.593765">
					Interactive Media Technology
				</StyledA>{' '}
				where I focused on visual media. Taking courses in computer graphics, game design,
				information visualization and evaluation methods.
			</Paragraph>

			<Paragraph>
				For{' '}
				{/* <StyledA href="https://www.diva-portal.org/smash/record.jsf?dswid=9827&pid=diva2%3A1469206&c=1&searchType=UNDERGRADUATE&language=en&query=&af=%5B%5D&
          aq=%5B%5B%7B%22author%22%3A%5B%22Sandberg%2C+Staffan%22%5D%7D%5D%5D&aq2=%5B%5B%7B%22dateIssued%22%3A%7B%22from%22%3A%222020%22%2C%22to%22%3A%222020%22%7D%7D%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=true&sf=all">
						my thesis
					</StyledA>{' '} */}
				<StyledA href="https://staffansandberg.com/masters-thesis">my thesis</StyledA> I wanted to
				explore Virtual Reality a bit further, since I had only briefly used it previously in one of
				my courses. Therefore I found a topic where I had to create a driving simulator for electric
				vehicles in VR. In order to test a range critical situation using two different dashboards.{' '}
				{/*You can read about the project in a shorter
						format compared to the article{' '}
						<LinkInternal
							text="here on my website"
							handleNav={(route) => handleNav(route)}
							route="/projects"
						/> */}
			</Paragraph>
			<Paragraph>
				In my free time I enjoy playing classical guitar, video games, reading books and learning
				new things in general. One newfound interest is{' '}
				<StyledA href="https://en.wikipedia.org/wiki/Disc_golf">Disc golf</StyledA> which I find
				very enjoyable and meditative.
			</Paragraph>
			<Paragraph>
				On this site you can see different projects that I've been a part of and blog posts about
				things I've learnt and want to share.
			</Paragraph>
			<Paragraph>You can find and contact me here:</Paragraph>
			<Contact />
		</Container>
	);
};

export default homePage;
