import * as React from 'react';
import { useState } from 'react';

import { Container, Paragraph } from '../Content/Blogposts/styledComponents';
import MusicPlayer from '../components/MusicPlayer';

import { StyledA } from './homePage';

type Music = { title: string, src: string };
type MusicList = Array<Music>;

const guitarPage = () => {
	// Stores last played song
	const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

	const handleOnPlay = (src: string) => {
		setCurrentlyPlaying(src);
	};

	const music: MusicList = [
		{
			title: 'Acoustic Piece - Avenged Sevenfold',
			src: 'https://staffansandberg.com/media/music/guitar/acoustic-piece.mp3',
		},
		{
			title: 'Spanish Romance (Romanza)',
			src: 'https://staffansandberg.com/media/music/guitar/romance-with-reverb.mp3',
		},
		{
			title: 'Nothing else matters (Intro)',
			src: 'https://staffansandberg.com/media/music/guitar/nothing-else-matters-intro.mp3',
		},
	];

	return (
    <Container>
      <Paragraph>
        In elementary school I was fortunate to have two very enthusiastic music teachers. Where
        one gave out extra guitar lessons on a weekly basis. I signed up for those with the
        intention to gain some guitar skills outside of{' '}
        <StyledA href="https://en.wikipedia.org/wiki/Guitar_Hero_III:_Legends_of_Rock">
          Guitar Hero 3
        </StyledA>{' '}
        and <StyledA href="https://en.wikipedia.org/wiki/Frets_on_Fire">Frets on Fire</StyledA>,
        which are two game I logged waaay too many hours in!
      </Paragraph>
      <Paragraph>
        Nowadays I turn to Youtube! tutorials and guitar tabs when I yearn for something new to
        play. One great source for tabs and tutorials in my opinion is{' '}
        <StyledA href="https://www.guitarnick.com/">Guitar Nick</StyledA>
      </Paragraph>
      <Paragraph>
        Down below are a few recordings of me playing the guitar. I mostly play everything{' '}
        <StyledA href="https://en.wikipedia.org/wiki/Fingerstyle_guitar">fingerstyle</StyledA> on
        a classical guitar.
      </Paragraph>
      {music.map((data) => {
        return (
          <MusicPlayer
            key={data.src}
            title={data.title}
            src={data.src}
            onPlay={handleOnPlay}
            currentlyPlaying={currentlyPlaying}
          />
        );
      })}
      <Paragraph>More to come...</Paragraph>
    </Container>
	);
};

export default guitarPage;
