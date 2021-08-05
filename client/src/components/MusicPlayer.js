import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { DARK_THEME } from '../constants/colors';

const StyledMusicPlayer = styled.div`
	padding: 5px;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 10px;
	margin-top: 10px;

	background-color: ${(p) => (p.isPlaying === true ? DARK_THEME.IS_PLAYING : DARK_THEME.LINK_1)};
`;

const StyledMusicTitle = styled.div`
	margin-bottom: 5px;
`;

const StyledAudio = styled.audio`
	width: 100%;
`;

const MusicPlayer = (props) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const { src, title, pauseAllOther } = props;

	useEffect(() => {
		// console.log(isPlaying);
	});
	// If other track starts playing, pause this one if it's playing.

	// If the user is seeking (moving the timeline slider) we don't want to change the background color!
	// Since the bg should only change when the user pause the music to move focus elsewhere!
	const handlePause = (e) => {
		if (!e.target.seeking) {
			setIsPlaying(false);
		}
	};

	return (
		<StyledMusicPlayer isPlaying={isPlaying}>
			<StyledMusicTitle>{title}</StyledMusicTitle>
			<StyledAudio controls onPlay={() => setIsPlaying(true)} onPause={handlePause}>
				<source src={src} type="audio/mpeg" />
			</StyledAudio>
		</StyledMusicPlayer>
	);
};

export default MusicPlayer;
