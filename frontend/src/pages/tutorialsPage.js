import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DESKTOP_XS } from '../constants/sizes';

import FadeIn from '../components/FadeIn';
import ProjectCard from '../components/ProjectCard';

const StyledTutorialsPage = styled.div`
	@media (min-width: ${DESKTOP_XS}) {
		display: grid;
		max-width: 1100px;
		grid-row-gap: 20px;

		padding: 20px 10px 20px 20px;
	}
`;

const StyledTutorialVideosGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-gap: 15px;
`;

const StyledVideoContainer = styled.div`
	display: grid;
	width: 500px;
	padding-top: 10px;
	font-weight: bold;
`;

function VideoPlayer({ title, src }) {
	return (
		<StyledVideoContainer>
			<div>{title}</div>
			<video width="500" height="300" controls>
				<source src={src} type="video/mp4" />
			</video>
		</StyledVideoContainer>
	);
}

const TutorialsPage = (props) => {
	const [width, setWidth] = useState(300 * 2);
	const [height, setHeight] = useState(null);

	useEffect(() => {
		setHeight(width / 1.8);
	});

	// const videos = [
	// 	'https://www.youtube.com/embed/uP1u2lYN3DQ',
	// 	'https://www.youtube.com/embed/D3Ls3jAgcwM',
	// ];

	const videos = [
		{
			title: 'Braun Series 3 Shaver Battery Replacement',
			src: 'https://staffansandberg.com/media/video/braun-series-3-battery-replacement.mp4',
		},
		{
			title: 'Bosh Maxx 7 Washer How To Mute',
			src: 'https://staffansandberg.com/media/video/bosh-maxx-7-varioperfect-turn-off-beep.mp4',
		},
	];

	return (
		<FadeIn>
			<StyledTutorialsPage>
				<div>
					Sometimes when I come across an annoyance and manage to find a solution for it. I get the
					feeling there's probably someone else out there with the same little annoyance. When that
					feeling strikes me I tend to make a video tutorial on how I went about solving it.
				</div>
				<StyledTutorialVideosGrid>
					{videos.map((video) => {
						return <VideoPlayer key={video.title} title={video.title} src={video.src} />;
					})}
				</StyledTutorialVideosGrid>
			</StyledTutorialsPage>
		</FadeIn>
	);
};

export default TutorialsPage;
