import * as React from 'react';
import styled from 'styled-components';

const StyledVideoContainer = styled.div`
	width: 500px;
	font-weight: bold;
`;

type VideoPlayerProps = {
	src: string;
	title?: string;
	thumbnail?: string;
	width?: string;
};

const VideoPlayer = ({ title, src, thumbnail, width = '500' }: VideoPlayerProps) => {
	return (
		<StyledVideoContainer>
			<div>{title}</div>
			<video width={width} poster={thumbnail} controls>
				<source src={src} type="video/mp4" />
			</video>
		</StyledVideoContainer>
	);
};

export default VideoPlayer;
