import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../../Components/Layout';
import Link from '../../Components/Link';
import VideoPlayer from '../../Components/VideoPlayer';

const StyledTutorialVideosGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;

	max-width: 1100px;
`;

const TutorialsPage = () => {
	const videos = [
		{
			title: 'Braun Series 3 Shaver Battery Replacement',
			src: "https://www.youtube.com/embed/uP1u2lYN3DQ",
		},
		{
			title: 'Bosh Maxx 7 Washer How To Mute',
			src: "https://www.youtube.com/embed/D3Ls3jAgcwM",
		},
	];

	return (
		<Container>
			<p>
				Sometimes when I come across an annoyance and manage to find a solution for it. I get the
				feeling there's probably someone else out there with the same little annoyance. When that
				feeling strikes me I tend to make a video tutorial on how I went about solving it.
			</p>
			<p>
				My current project which is taking some time to complete is a tutorial on how to digitalize
				videos captured on a cam corder. At home we had a bunch of old MiniDV casettes which I took
				upon myself to transfer to my home server for any family member to view via Plex.
			</p>
			<p>
				I only upload videos to Youtube which I believe many people will benefit from. As of today
				20-01-2024 theses two videos have a combined view count of 237.9K.{' '}
				<Link
					href="https://www.youtube.com/channel/UCNE6qUrKRkuXqnGFf8ytEmg"
					text="My Youtube channel"
				/>
			</p>
			<StyledTutorialVideosGrid>
				{videos.map((video) => {
					return (
						<VideoPlayer
							key={video.title}
							title={video.title}
							src={video.src}
						/>
					);
				})}
			</StyledTutorialVideosGrid>
		</Container>
	);
};

export default TutorialsPage;
