import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import MusicPlayer from '../components/MusicPlayer';

import { DESKTOP_XS } from '../constants/sizes';
import { StyledA } from './homePage';

import '../CSSTransitions/transitions.scss';

const Container = styled.div`
	@media (min-width: ${DESKTOP_XS}) {
		display: grid;
		margin: 20px;
		grid-template-columns: minmax(auto, 800px);
		grid-row-gap: 10px;
	}
`;

const guitarPage = () => {
	const handlePauseAllOther = (key) => {
		console.log(key);
	};

	const music = [
		{
			title: 'Acoustic Piece - Avenged Sevenfold',
			src: 'https://staffansandberg.com/media/music/guitar/acoustic-piece.mp3',
		},
		{
			title: 'Spanish Romance (Romanza)',
			src: 'https://staffansandberg.com/media/music/guitar/romance-with-reverb.mp3',
		},
	];

	return (
		<CSSTransition in={true} appear={true} classNames="fade" timeout={300}>
			<Container>
				<div>
					In elementary school I was fortunate to have two very enthusiastic music teachers. Where
					one gave out extra guitar lessons on a weekly basis. I signed up for those with the
					intention to gain some guitar skills outside of{' '}
					<StyledA href="https://en.wikipedia.org/wiki/Guitar_Hero_III:_Legends_of_Rock">
						Guitar Hero 3
					</StyledA>{' '}
					and <StyledA href="https://en.wikipedia.org/wiki/Frets_on_Fire">Frets on Fire</StyledA>,
					which are two game I logged waaay too many hours in!
				</div>
				<div>
					Nowadays I turn to Youtube tutorials and guitar tabs when I yearn for something new to
					play. One great source for tabs and tutorials in my opinion is{' '}
					<StyledA href="https://www.guitarnick.com/">Guitar Nick</StyledA>
				</div>
				<div>
					Down below are a few recordings of me playing the guitar. I mostly play everything{' '}
					<StyledA href="https://en.wikipedia.org/wiki/Fingerstyle_guitar">fingerstyle</StyledA> on
					a classical guitar.
				</div>
				{music.map((data) => {
					return (
						<MusicPlayer
							key={data.src}
							title={data.title}
							src={data.src}
							pauseAllOther={() => handlePauseAllOther(data.src)}
						/>
					);
				})}
				<div>More to come...</div>
			</Container>
		</CSSTransition>
	);
};

export default guitarPage;
