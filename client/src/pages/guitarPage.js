import React from 'react';
import styled from 'styled-components';
import { DARK_THEME } from '../constants/colors';
import { DESKTOP_XS } from '../constants/sizes';
import { StyledA } from './homePage';

const Container = styled.div`
	@media (min-width: ${DESKTOP_XS}) {
		display: grid;
		margin: 20px;
		grid-template-columns: minmax(auto, 800px);
		grid-row-gap: 10px;
	}
`;

const StyledMusicPlayer = styled.div`
	background-color: ${DARK_THEME.LINK_1};
	padding: 5px;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 10px;
`;

const StyledMusicTitle = styled.div`
	margin-bottom: 5px;
`;

const StyledAudio = styled.audio`
	width: 100%;
`;

const MusicPlayer = (props) => {
	const { musicSource, title } = props;
	return (
		<StyledMusicPlayer>
			<StyledMusicTitle>{title}</StyledMusicTitle>
			<StyledAudio controls>
				<source src={musicSource} type="audio/mpeg" />
			</StyledAudio>
		</StyledMusicPlayer>
	);
};

const guitarPage = () => {
	return (
		<Container>
			<div>
				In elementary school I was fortunate to have two very enthusiastic music teachers. Where one
				gave out extra guitar lessons on a weekly basis. I signed up for those with the intention to
				gain some guitar skills outside of{' '}
				<StyledA href="https://en.wikipedia.org/wiki/Guitar_Hero_III:_Legends_of_Rock">
					Guitar Hero 3
				</StyledA>{' '}
				and <StyledA href="https://en.wikipedia.org/wiki/Frets_on_Fire">Frets on Fire</StyledA>,
				which are two game I logged waaay too many hours in!
			</div>
			<div>
				Nowadays I turn to Youtube tutorials and guitar tabs when I yearn for something new to play.
				One great source for tabs and tutorials is{' '}
				<StyledA href="https://www.guitarnick.com/">Guitar Nick</StyledA>
			</div>
			<div>
				Down below are a few recordings of me playing the guitar. I mostly play everything{' '}
				<StyledA href="https://en.wikipedia.org/wiki/Fingerstyle_guitar">fingerstyle</StyledA> on a
				classical guitar.
			</div>
			<MusicPlayer
				title="Acoustic Piece - Avenged Sevenfold"
				musicSource="https://staffansandberg.com/guitar/acoustic-piece.mp3"
			/>
			<MusicPlayer
				title="Romance"
				musicSource="https://staffansandberg.com/guitar/romance-with-reverb.mp3"
			/>
		</Container>
	);
};

export default guitarPage;
