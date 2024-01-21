import * as React from 'react';
import styled from 'styled-components';
import Image from '../../Components/Image/Image';
import ImageRow from '../../Components/ImageRow/ImageRow';

import { Container } from '../../Components/Layout';
import VideoPlayer from '../../Components/VideoPlayer';

import projectsMetadata from './projectsMetadata';

interface Props {}
const arCards = (props: Props) => {
	return (
		<Container>
			<h1>Tracking Card Game with AR</h1>
			<p>For a course, our group of three students were tasked with creating a concept for tracking how a card game has been played. In order to analyze trends over multiple sessions. The card game is called Teachers Against Humanity and is developed by researchers at KTH.</p>

      <p>The idea behind the game was for teachers to brainstorm teaching methods through a card game. The game is using similar mechanics as the famous card game Cards Against Humanity, hence the name Teachers Against Humanity.</p>

      <p>Theses are two examples of what the cards look like.</p>

      <ImageRow>
        <Image 
          imagePath='media/images/ar-card-tracking/tah-card-1.webp'
          caption="Example of playing card."
          figNumber={1}
          maxWidth='300px'
        />
        <Image 
          imagePath='media/images/ar-card-tracking/tah-card-2.webp'
          caption="Example of playing card."
          figNumber={2}
          maxWidth='300px'
        />
      </ImageRow>

      <p>In our group of three students we came up with the idea of using AR to track which card has been played in what order by whom. We designed a game board with a marker in the center for our smartphone with AR to track the game board and keep track of which area the cards are placed in.</p>

      <Image 
        imagePath='media/images/ar-card-tracking/tah_game_board.webp'
        caption='Game board with marker in the center and designated player areas.'
        figNumber={3}
        maxWidth='700px'
      />

      <p>Unfortunately our smartphone didn't have a good enough camera to distinguish the cards from the set height above the game board, as seen in figure 3.</p>

      <p>Here's a demonstrational video of how the concept works for tracking a session.</p>

      <VideoPlayer 
        title='Concept demonstration'
        src='https://staffansandberg.com/media/video/TAH_How_To.webm'
        maxWidth='800px'
      />
		</Container>
	);
};

export default arCards;
