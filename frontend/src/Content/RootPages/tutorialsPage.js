import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Paragraph } from '../styledComponents';

const StyledTutorialVideosGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;

	max-width: 1100px;
`;

const StyledVideoContainer = styled.div`
	width: 500px;
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
		<Container>
			<Paragraph>
				Sometimes when I come across an annoyance and manage to find a solution for it. I get the
				feeling there's probably someone else out there with the same little annoyance. When that
				feeling strikes me I tend to make a video tutorial on how I went about solving it.
			</Paragraph>
			<StyledTutorialVideosGrid>
				{videos.map((video) => {
					return <VideoPlayer key={video.title} title={video.title} src={video.src} />;
				})}
			</StyledTutorialVideosGrid>
		</Container>
	);
};

export default TutorialsPage;
