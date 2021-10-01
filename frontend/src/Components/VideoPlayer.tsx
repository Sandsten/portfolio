import * as React from 'react';
import { useEffect, useRef } from 'react';
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

/*
  Video player that remembers volume on page reloads.
  Volume level is saved in local storage and when a video player is loaded that volume will be set.
  And if volume is changed on the video the local storage value will be updated as well.
*/
const VideoPlayer = ({ title, src, thumbnail, width = '500' }: VideoPlayerProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	function rememberVolume(e: React.ChangeEvent<HTMLVideoElement>) {
		localStorage.setItem('volume', e.currentTarget.volume.toString());
	}

	useEffect(() => {
		const storedVolume = localStorage.getItem('volume');
		if (storedVolume && videoRef.current) {
			videoRef.current.volume = parseFloat(storedVolume);
		}
	}, []);

	return (
		<StyledVideoContainer>
			<div>{title}</div>
			<video
				ref={videoRef}
				width={width}
				poster={thumbnail}
				onVolumeChange={rememberVolume}
				controls
			>
				<source src={src} type="video/mp4" />
			</video>
		</StyledVideoContainer>
	);
};

export default VideoPlayer;
