import React from 'react';
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
		</ContactContainer>
	);
};

const homePage = () => {
	return (
		<Container>
			<p>Hey there! Thank you for visiting my website.</p>

			<p>
				I'm Staffan and I'm currently working as a software engineering consultant. 
				With a focus on webdevelopment and authentication and authorization.
			</p>

			<p>
				I earned my Master's degree in <Link
					href="https://www.kth.se/en/studies/master/interactivemediatechnology/description-1.593765"
					text="Interactive Media Technology"
				/> specializing in visual media, following my Bachelor's degree in <Link
					href="https://www.kth.se/student/kurser/program/TSVDK/20122/mal"
					text="Simulation Technology and Virtual Design"
				/> from <Link href="https://kth.se" text="Kungliga Tekniska Högskolan" />. This educational journey not only deepened my understanding of programming and graphics but also allowed me to explore diverse areas such as computer graphics, game design, information visualization, and evaluation methods.
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