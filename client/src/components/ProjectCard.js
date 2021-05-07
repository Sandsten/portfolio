import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { BASE03, BASE2, BASE2_SATURATED, BASE02_SATURATED, BASE1 } from '../constants/colors';
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
	filter: ${(p) => (p.theme.main === 'LIGHT' ? 'none' : 'brightness(80%)')};
`;

const Tags = styled.div`
	grid-area: tags;
	font-size: 0.9em;
	margin: 10px;
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
			<Tags>{data.tools.join(', ')}</Tags>
			<Image src={thumbnail} alt={data.title + 'thumbnail'} />
		</StyledProjectCard>
	);
};

export default ProjectCard;
