import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { BASE03, BASE2, BASE1, B0 } from '../constants/colors';
import { MOBILE_XS } from '../constants/sizes';

const StyledProjectCard = styled(Link)`
	display: grid;
	grid-template-areas:
		'img'
		'title'
		'desc'
		'tags';

	border-radius: 5px;
	text-decoration: none;
	grid-template-rows: auto 1fr auto;

	color: ${(p) => (p.theme.main === 'LIGHT' ? BASE03 : BASE1)};
	background-color: ${(p) => (p.theme.main === 'LIGHT' ? BASE2 : BASE03)};

	@media (min-width: ${MOBILE_XS}) {
		height: 200px;
		grid-template-areas:
			'title img'
			'desc  img'
			'tags  img';

		grid-template-columns: 1fr 1fr;
	}

	:hover {
		transform: scale(1.02);
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
	font-size: 0.8em;
	padding: 2px 5px 2px 5px;
	width: max-content; // Sets the width of the div to its content
	border-radius: 5px;
	margin-right: 5px;
	margin-top: 5px;

	background-color: ${(props) => (props.theme.main === 'LIGHT' ? '' : B0)};
`;

const ProjectCard = ({ data, style }) => {
	var thumbnail;
	try {
		// Update database to use webp format instead?
		thumbnail = `https://staffansandberg.com/${data.bgUrl}`.replace('png', 'webp');
	} catch (error) {
		thumbnail = '';
	}

	return (
		<StyledProjectCard style={style} to={'/projects/' + data.localURL}>
			<Title>
				<b>{data.title}</b>
			</Title>
			<Description>{data.descriptionShort}</Description>
			<TagContainer>
				{data.tools.map((value) => (
					<Tag>{value}</Tag>
				))}
			</TagContainer>
			{/* <Tags>{data.tools.join(', ')}</Tags> */}
			<Image src={thumbnail} alt={data.title + 'thumbnail'} />
		</StyledProjectCard>
	);
};

export default ProjectCard;
