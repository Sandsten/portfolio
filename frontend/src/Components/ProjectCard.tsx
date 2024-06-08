import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MOBILE_XS } from '../Constants/sizes';

import ankihggadded from '../assets/images/thumbnails/anki-hgg-added.webp'
import awayfromhome from '../assets/images/thumbnails/away-from-home.webp'
import bandmate from '../assets/images/thumbnails/bandmate.webp'
import bannersoundark from '../assets/images/thumbnails/banner-soundark.webp'
import bearwithme from '../assets/images/thumbnails/bear-with-me.webp'
import birchtree from '../assets/images/thumbnails/birch-tree.webp'
import boshmaxx7 from '../assets/images/thumbnails/bosh-maxx-7-varioperfect-how-to-turn-off-the-beeping-poster.webp'
import braunseries3 from '../assets/images/thumbnails/braun-series-3-battery-replacement-poster.webp'
import crowdsim from '../assets/images/thumbnails/crowdsim.webp'
import drivinginvr from '../assets/images/thumbnails/driving-in-vr.webp'
import drivingsimulator from '../assets/images/thumbnails/driving-simulator-v1-thumbnail.webp'
import godball from '../assets/images/thumbnails/godball.webp'
import hapticcurling from '../assets/images/thumbnails/haptic-curling.webp'
import lastShip from '../assets/images/thumbnails/lastShip.webp'
import lion from '../assets/images/thumbnails/lion.webp'
import peralbin from '../assets/images/thumbnails/per-albin.webp'
import plexlogo from '../assets/images/thumbnails/plex-logo.webp'
import portfoliothumbnail from '../assets/images/thumbnails/portfolio-thumbnail.webp'
import posterversion2 from '../assets/images/thumbnails/poster-version-2.webp'
import shootingrange from '../assets/images/thumbnails/shooting-range.webp'
import soundark from '../assets/images/thumbnails/soundark.webp'
import storylines from '../assets/images/thumbnails/storylines.webp'
import thesisthumbnail from '../assets/images/thumbnails/thesis-thumbnail.webp'
import trackingcards from '../assets/images/thumbnails/tracking-cards.webp'
import webgl from '../assets/images/thumbnails/webgl.webp'


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
	
	transition: transform 0.1s ease, box-shadow 0.1s ease;
	:hover {
		transform: translate(-2px, -2px); // scale(1.005);
		box-shadow: 7px 7px 5px 0px black;
		/* box-shadow: 7px 7px 5px 0px ${p => p.theme.colors.TAG_BG}; */
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
	overflow: hidden;
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
	'anki-hgg-added.webp': ankihggadded,
	'away-from-home.webp': awayfromhome,
	'bandmate.webp': bandmate,
	'banner-soundark.webp': bannersoundark,
	'bear-with-me.webp': bearwithme,
	'birch-tree.webp': birchtree,
	'bosh-maxx-7-varioperfect-how-to-turn-off-the-beeping-poster.webp': boshmaxx7,
	'braun-series-3-battery-replacement-poster.webp': braunseries3,
	'crowdsim.webp': crowdsim,
	'driving-in-vr.webp': drivinginvr,
	'driving-simulator-v1-thumbnail.webp': drivingsimulator,
	'godball.webp': godball,
	'haptic-curling.webp': hapticcurling,
	'lastShip.webp': lastShip,
	'lion.webp': lion,
	'per-albin.webp': peralbin,
	'plex-logo.webp': plexlogo,
	'portfolio-thumbnail.webp': portfoliothumbnail,
	'poster-version-2.webp': posterversion2,
	'shooting-range.webp': shootingrange,
	'soundark.webp': soundark,
	'storylines.webp': storylines,
	'thesis-thumbnail.webp': thesisthumbnail,
	'tracking-cards.webp': trackingcards,
	'webgl.webp': webgl,
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
