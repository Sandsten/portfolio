import * as React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DESKTOP_XS } from '../Constants/sizes';

// Images and videos could potentially share this wrapper
const StyledFigure = styled.figure<{maxWidth: string}>`
	/* flex-grow: 1; // Allow item to increase its size along the main axis */
	/* flex-shrink: 1; // Allow item to decrease its size along the main axis */
	/* flex-basis: auto; // */
	/* flex: 1 1 auto; // Same as the three above */

	/* flex: initial; // same as flex: 0 1 auto; */
	align-self: flex-end;
	flex-grow: 1;
	flex-shrink: 1;
	flex-basis: 0;

	// This will center the figure
	margin-left: auto;
	margin-right: auto;
	/* margin-top: 0; */
	/* margin-bottom: 20px; */

	max-width: ${(p) => p.maxWidth};

	background-color: ${(p) => p.theme.colors.CARD_BG};
	padding: 10px;

  .title {
    padding-bottom: 10px;
  }

  video {
    width: 100%;
  }

	figcaption {
		font-size: 0.9em;
	}

	// This is when the sidebar moves to the left side
	@media (min-width: ${DESKTOP_XS}) {
		margin-left: 0;
		margin-right: 0px;

		:last-child {
			margin-right: 0;
		}
	}
`;


type VideoPlayerProps = {
	src: string;
	title?: string;
	thumbnail?: string;
	maxWidth?: string;
  caption?: string;
};

/*
  Video player that remembers volume on page reloads.
  Volume level is saved in local storage and when a video player is loaded that volume will be set.
  And if volume is changed on the video the local storage value will be updated as well.
*/
const VideoPlayer = ({ title, src, thumbnail, maxWidth = '500', caption }: VideoPlayerProps) => {
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
		<StyledFigure maxWidth={maxWidth}>
			<div className='title'>{title}</div>
			<video
				ref={videoRef}
				poster={thumbnail}
				onVolumeChange={rememberVolume}
				controls
			>
				<source src={src} type="video/mp4" />
			</video>
      {caption ? 
        <caption>
          {caption}
        </caption> 
        : null}
		</StyledFigure>
	);
};

export default VideoPlayer;
