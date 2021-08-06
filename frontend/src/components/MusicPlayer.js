import React, { useEffect, useState, useRef } from 'react';
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
	const playerControl = useRef(null);

	// This is only for setting the bg color of the player
	const [isPlaying, setIsPlaying] = useState(false);

	const { src, title, onPlay, currentlyPlaying } = props;

	useEffect(() => {
		// If the user plays another song, pause all other ones
		if (currentlyPlaying !== src) {
			playerControl.current.pause();
		}
	}, [currentlyPlaying]);

	const handleOnPlay = () => {
		// Pass the src of currently playing song to parent component
		onPlay(src);
		setIsPlaying(!playerControl.current.paused);
	};

	// If the user is seeking (moving the timeline slider) we don't want to change the background color!
	// Since the bg should only change when the user click pause or plays another track
	const handlePause = (e) => {
		if (!e.target.seeking) {
			setIsPlaying(!playerControl.current.paused);
		}
	};

	return (
		<StyledMusicPlayer isPlaying={isPlaying}>
			<StyledMusicTitle>{title}</StyledMusicTitle>
			<StyledAudio controls onPlay={handleOnPlay} onPause={handlePause} ref={playerControl}>
				<source src={src} type="audio/mpeg" />
			</StyledAudio>
		</StyledMusicPlayer>
	);
};

export default MusicPlayer;
