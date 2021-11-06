import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '../../Components/Layout';

import Link from '../../Components/Link';

const ContactContainer = styled.div`
	display: flex;
	font-size: 1.3em;
	margin-left: -5px;

	span {
		margin: 5px;
	}
`;

const Contact = () => {
	return (
		<ContactContainer>
			<Link href="https://www.linkedin.com/in/stsa/" text="Linkedin" />
			<Link href="https://github.com/Sandsten" text="Github" />
			{/* <Link target="_blank" href="mailto:stsand@kth.se" rel="noopener noreferrer" text="Email">
				Email */}
		</ContactContainer>
	);
};

const homePage = () => {
	const [shouldAnimate] = useState(true);
	const history = useHistory();
	const handleNav = (route) => history.push(route);

	return (
		<Container>
			<p>Hello and welcome to my website!</p>
			<p>
				My bachelor is in{' '}
				<Link
					href="https://www.kth.se/student/kurser/program/TSVDK/20122/mal"
					text="Simulation Technology and Virtual Design"
				/>{' '}
				at <Link href="https://kth.se" text="Kungliga Tekniska Högskolan" />. Which sparked my
				interest for programming and graphics.
			</p>

			<p>
				My master's is in{' '}
				<Link
					href="https://www.kth.se/en/studies/master/interactivemediatechnology/description-1.593765"
					text="Interactive Media Technology"
				/>{' '}
				where I focused on visual media. Taking courses in computer graphics, game design,
				information visualization and evaluation methods.
			</p>

			<p>
				For{' '}
				{/* <StyledA href="https://www.diva-portal.org/smash/record.jsf?dswid=9827&pid=diva2%3A1469206&c=1&searchType=UNDERGRADUATE&language=en&query=&af=%5B%5D&
          aq=%5B%5B%7B%22author%22%3A%5B%22Sandberg%2C+Staffan%22%5D%7D%5D%5D&aq2=%5B%5B%7B%22dateIssued%22%3A%7B%22from%22%3A%222020%22%2C%22to%22%3A%222020%22%7D%7D%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=true&sf=all">
						my thesis
					</StyledA>{' '} */}
				<Link href="https://staffansandberg.com/projects/masters-thesis" text="my thesis" /> I
				wanted to explore Virtual Reality a bit further, since I had only briefly used it previously
				in one of my courses. Therefore I found a topic where I had to create a driving simulator
				for electric vehicles in VR. In order to test a range critical situation using two different
				dashboards.{' '}
				{/*You can read about the project in a shorter
						format compared to the article{' '}
						<LinkInternal
							text="here on my website"
							handleNav={(route) => handleNav(route)}
							route="/projects"
						/> */}
			</p>
			<p>
				In my free time I enjoy playing classical guitar, video games, reading books and learning
				new things in general. One newfound interest is{' '}
				<Link href="https://en.wikipedia.org/wiki/Disc_golf" text="Disc golf" /> which I find very
				enjoyable and meditative.
			</p>
			<p>
				On this site you can see different projects that I've been a part of and blog posts about
				things I've learnt and want to share.
			</p>
			<p>You can find and contact me here:</p>
			<Contact />
		</Container>
	);
};

export default homePage;
