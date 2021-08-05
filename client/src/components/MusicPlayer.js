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

	return (
		<StyledMusicPlayer isPlaying={isPlaying}>
			<StyledMusicTitle>{title}</StyledMusicTitle>
			<StyledAudio controls onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
				<source src={src} type="audio/mpeg" />
			</StyledAudio>
		</StyledMusicPlayer>
	);
};

export default MusicPlayer;
