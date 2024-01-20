import * as React from 'react';
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
	overflow: hidden;
	text-overflow: ellipsis;
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
	margin-top: 3px;
	line-height: 1.1em;
	background-color: ${(p) => p.theme.colors.TAG_BG};
`;

type Thumbnails = Record<string, string>;

const thumbnails: Thumbnails = {
	"anki-hgg-added.webp": require('../assets/images/thumbnails/anki-hgg-added.webp'),
	"away-from-home.resized.webp": require('../assets/images/thumbnails/away-from-home.resized.webp'),
	"away-from-home.webp": require('../assets/images/thumbnails/away-from-home.webp'),
	"bandmate.resized.webp": require('../assets/images/thumbnails/bandmate.resized.webp'),
	"bandmate.webp": require('../assets/images/thumbnails/bandmate.webp'),
	"banner-soundark.webp": require('../assets/images/thumbnails/banner-soundark.webp'),
	"bear-with-me.webp": require('../assets/images/thumbnails/bear-with-me.webp'),
	"birch-tree.webp": require('../assets/images/thumbnails/birch-tree.webp'),
	"bosh-maxx-7-varioperfect-how-to-turn-off-the-beeping-poster.webp": require('../assets/images/thumbnails/bosh-maxx-7-varioperfect-how-to-turn-off-the-beeping-poster.webp'),
	"braun-series-3-battery-replacement-poster.webp": require('../assets/images/thumbnails/braun-series-3-battery-replacement-poster.webp'),
	"crowdsim.webp": require('../assets/images/thumbnails/crowdsim.webp'),
	"driving-in-vr.webp": require('../assets/images/thumbnails/driving-in-vr.webp'),
	"driving-simulator-v1-thumbnail.webp": require('../assets/images/thumbnails/driving-simulator-v1-thumbnail.webp'),
	"godball.webp": require('../assets/images/thumbnails/godball.webp'),
	"haptic-curling.webp": require('../assets/images/thumbnails/haptic-curling.webp'),
	"lastShip.webp": require('../assets/images/thumbnails/lastShip.webp'),
	"lion.webp": require('../assets/images/thumbnails/lion.webp'),
	"per-albin.webp": require('../assets/images/thumbnails/per-albin.webp'),
	"poster-version-2.webp": require('../assets/images/thumbnails/poster-version-2.webp'),
	"shooting-range.webp": require('../assets/images/thumbnails/shooting-range.webp'),
	"soundark.webp": require('../assets/images/thumbnails/soundark.webp'),
	"storylines.webp": require('../assets/images/thumbnails/storylines.webp'),
	"thesis-thumbnail.webp": require('../assets/images/thumbnails/thesis-thumbnail.webp'),
	"tracking-cards.webp": require('../assets/images/thumbnails/tracking-cards.webp'),
	"webgl.webp": require('../assets/images/thumbnails/webgl.webp'),
}

interface ProjectCardProps {
	project: ProjectCard;
}

interface ProjectCard {
	title: string;
	thumbnail: string;
	summary: string;
	tools: Array<string>;
	page: string;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<StyledProjectCard to={`/projects/${project.page}`}>
			<Title>
				<b>{project.title}</b>
			</Title>
			<Description>{project.summary}</Description>
			<TagContainer>
				{project.tools.sort().map((tag) => {
					return <Tag key={tag}>{tag}</Tag>;
				})}
			</TagContainer>
			<Image src={thumbnails[project.thumbnail]} alt={`${project.title}-thumbnail`} />
		</StyledProjectCard>
	);
};

export default ProjectCard;
