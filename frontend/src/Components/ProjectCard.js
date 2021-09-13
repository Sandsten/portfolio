import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MOBILE_XS } from '../Constants/sizes';

const StyledProjectCard = styled(Link)`
	display: grid;
	grid-template-areas:
		'img'
		'title'
		'desc'
		'tags';

	grid-template-rows: 150px auto 2fr auto;

	border-radius: 5px;
	text-decoration: none;
	height: 300px;
	overflow: hidden; // Necessary to keep image corners follow given border radius of its parent
	font-weight: 300;

	color: ${(p) => p.theme.colors.TEXT};
	background-color: ${(p) => p.theme.colors.CARD_BG};

	@media (min-width: ${MOBILE_XS}) {
		height: 210px;
		grid-template-areas:
			'title img'
			'desc  img'
			'tags  img';

		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto 1fr auto;
	}

	:hover {
		/* transform: scale(1.02); */
		transform: translateY(-1px); // scale(1.005);
		/* box-shadow: 0px 2px 10px 1px black; */
	}
`;

const Title = styled.div`
	grid-area: title;
	font-size: 1.1em;
	margin: 10px;
`;

const Description = styled.div`
	grid-area: desc;
	font-size: 0.9em;
	margin: 10px;
	margin-top: 0;
`;

const Image = styled.img`
	grid-area: img;
	object-fit: cover;
	height: 100%;
	width: 100%;
	/* overflow: hidden; */
`;

const TagContainer = styled.div`
	grid-area: tags;
	margin: 10px;
	/* Using flex here since we can't have uneven grid columns */
	display: flex;
	flex-wrap: wrap;
`;

const Tag = styled.div`
	font-size: 0.7em;
	padding: 2px 5px 2px 5px;
	width: max-content; // Sets the width of the div to its content
	border-radius: 5px;
	margin-right: 5px;
	margin-top: 5px;

	background-color: ${(p) => p.theme.colors.TAG_BG};
`;

const ProjectCard = (props) => {
	const { title, thumbnail, description, tags, clickURL } = props;

	// TODO: Update database with correct url endings
	let thumbnailUrl;
	try {
		// Update database to use webp format instead?
		if (thumbnail.includes('https://staffansandberg.com/')) thumbnailUrl = thumbnail;
		else thumbnailUrl = `https://staffansandberg.com/${thumbnail}`.replace('png', 'webp');
	} catch (error) {
		thumbnailUrl = '';
	}

	return (
		<StyledProjectCard to={'/projects/' + clickURL}>
			<Title>
				<b>{title}</b>
			</Title>
			<Description>{description}</Description>
			<TagContainer>
				{tags.map((tag) => {
					if (tag == 'cpp') {
						tag = 'c++';
					}
					return <Tag key={tag}>{tag}</Tag>;
				})}
			</TagContainer>
			<Image src={thumbnailUrl} alt={title + 'thumbnail'} />
		</StyledProjectCard>
	);
};

export default ProjectCard;
