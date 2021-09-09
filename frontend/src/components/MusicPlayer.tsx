import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { compose } from 'redux';
import styled from 'styled-components';

import { DARK_THEME } from '../constants/colors';

const StyledMusicPlayer = styled.div<{ isPlaying: boolean }>`
	padding: 5px;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 10px;
	margin-top: 10px;
  max-width: 800px;


	/* Change background color depending on wether the song is playing or not */
	background-color: ${props => (props.isPlaying === true ? DARK_THEME.IS_PLAYING : DARK_THEME.LINK_1)};
`;

const StyledMusicTitle = styled.div`
	margin-bottom: 5px;
`;

const StyledAudio = styled.audio`
	width: 100%;
`;

type MusicPlayerProps = {
  src: string,
  title: string,
  onPlay: Function,
  currentlyPlaying: string | null
};

const MusicPlayer = ({ src, title, onPlay, currentlyPlaying }: MusicPlayerProps) => {
	// This is only for setting the bg color of the player
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const playerController = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		// If the user plays another song, pause all other ones
		if (currentlyPlaying !== src) {
      playerController.current?.pause();
		}
	}, [currentlyPlaying]);

	function handleOnPlay(e: React.ChangeEvent<HTMLAudioElement>) {
		// Pass the src of currently playing song to parent component
		onPlay(e.target.currentSrc);
    setIsPlaying(true);
	}

	// If the user is seeking (moving the timeline slider) we don't want to change the background color!
	// Since the bg should only change when the user click pause or plays another track
	function handlePause(e: React.ChangeEvent<HTMLAudioElement>) {
		if (!e.target.seeking) {
      setIsPlaying(false);
		}
	}

	return (
		<StyledMusicPlayer isPlaying={isPlaying}>
			<StyledMusicTitle>{title}</StyledMusicTitle>
			<StyledAudio controls onPlay={handleOnPlay} onPause={handlePause} ref={playerController}>
				<source src={src} type="audio/mpeg" />
			</StyledAudio>
		</StyledMusicPlayer>
	);
};

export default MusicPlayer;
