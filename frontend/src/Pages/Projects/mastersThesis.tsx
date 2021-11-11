import * as React from 'react';
import styled from 'styled-components';

import { Image } from '../../Components/Image';

import { Container } from '../../Components/Layout';

import { DESKTOP_XS } from '../../Constants/sizes';
import VideoPlayer from '../../Components/VideoPlayer';
import Link from '../../Components/Link';

/*
  FLEX DEFAULTS
  * Items display in a row (the flex-direction property's default is row).
  * The items start from the start edge of the main axis.
  * The items do not stretch on the main dimension, but can shrink.
  * The items will stretch to fill the size of the cross axis.
  * The flex-basis property is set to auto.
  * The flex-wrap property is set to nowrap
*/

const ImageRow = styled.div`
	display: flex; // Takes up entire available width of page by default!
	flex-direction: column;
	align-items: baseline;
	gap: 20px;

	@media (min-width: ${DESKTOP_XS}) {
		flex-direction: row;
		flex-wrap: nowrap;
		flex-grow: 1;
	}
`;

// Allow author to specify the max width a figure can have!
interface StyledFigureType {
	maxWidth: string;
}
// Theses are the flex items inside an image row
const StyledFigure = styled.figure<StyledFigureType>`
	/* flex-grow: 1; // Allow item to increase its size along the main axis */
	/* flex-shrink: 1; // Allow item to decrease its size along the main axis */
	/* flex-basis: auto; // */
	/* flex: 1 1 auto; // Same as the three above */

	/* flex: initial; // same as flex: 0 1 auto; */

	flex-grow: 1;
	flex-shrink: 1;
	flex-basis: 0;

	// This will center the figure
	margin-left: auto;
	margin-right: auto;

	max-width: ${(p) => p.maxWidth};
	/* max-height: 350px; */

	figcaption {
		font-size: 0.9em;
	}

	:hover {
		cursor: pointer;
	}

	// This is when the sidebar moves to the left side
	@media (min-width: ${DESKTOP_XS}) {
		margin-left: 0;
		margin-right: 20px;

		:last-child {
			margin-right: 0;
		}
	}
`;
interface Props {}

const mastersThesis = (props: Props) => {
	return (
		<Container>
			<h1>Master's Thesis</h1>
			<p>
				In my thesis I tried to answer the question of how drivers behave in a range critical
				situation whilst driving a battery electric vehicle (BEV) in virtual reality (VR).
				Specifically how two groups compare to each other, where one group used a novel dashboard
				based on previous research by my supervisor, and the other group used a more conventional
				dashboard sometimes referred to as a 'guess-o-meter' by BEV enthusiast.
			</p>
			<Link
				href="https://www.diva-portal.org/smash/record.jsf?dswid=9827&pid=diva2%3A1469206&c=1&searchType=UNDERGRADUATE&language=en&query=&af=%5B%5D&
          aq=%5B%5B%7B%22author%22%3A%5B%22Sandberg%2C+Staffan%22%5D%7D%5D%5D&aq2=%5B%5B%7B%22dateIssued%22%3A%7B%22from%22%3A%222020%22%2C%22to%22%3A%222020%22%7D%7D%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=true&sf=all"
				text="Full paper at DiVa"
			/>
			<Link href="https://github.com/Sandsten/bev-vr-simulator" text="Unity Project" />
			<h2>Simulator Setup</h2>
			<p>
				I built the simulator using Unity to allow for rapid implementation and iteration. The final
				product resulted in a driving simulator in which I could change the heads-up display through
				a dropdown menu in the inspector and set a user id. Once in the game I could adjust the
				user's virtual position to their comfort level. When hey were ready I could press "Start" in
				the game UI to start recording data associated with the drive. Such as time, speed,
				position, power usage and much more. Once the user either ran out of battery or made it to
				the finish line all the data was saved to disk in .csv format.{' '}
			</p>
			<ImageRow>
				<VideoPlayer
					src="https://staffansandberg.com/media/video/driving-simulator-v1.webm"
					width="500px"
					title="Novel heads-up display in BEV"
					thumbnail="https://staffansandberg.com/media/images/thumbnails/driving-simulator-v1-thumbnail.webp"
				/>
				<VideoPlayer
					src="https://staffansandberg.com/media/video/driving-simulator-guess-o-meter.webm"
					width="500px"
					title="Conventional 'Guess-o-meter' in BEV"
					thumbnail="https://staffansandberg.com/media/images/thumbnails/driving-in-vr-guess-o-meter-thumbnail.webp"
				/>
			</ImageRow>

			<ImageRow>
				<Image
					caption="Setup of driving simulator. VR headset, steering wheel + pedals, seat, speakers and microphone."
					imagePath="media/images/thesis/simulator-setup.webp"
					maxWidth={'350px'}
					figNumber={1}
				></Image>
				{/* <Image
					caption="View from the driver's perspective in VR."
					imagePath="media/images/thesis/driving-in-vr.webp"
					maxWidth={'700px'}
					figNumber={2}
				></Image> */}
			</ImageRow>
			<h2>Recruiting Participants</h2>
			<p>
				One tricky aspect of user studies is finding participants! I started with designing a poster
				and placing it around KTH Campus to recruit students, staff and anyone who happen to pass
				by. Since VR is a relatively novel technology I used it as an incentive to try and attract
				as many participants as possible. And to make signing up as smooth as possible I used the
				free tier of <Link href="https://calendly.com/" text="Calendly" /> and a generated QR code
				which takes you directly to the sign up page. On the sign up page the participants could
				choose a time slot on their terms.
			</p>

			<p>
				Unfortunately this coincided precisely with COVID, which resulted in me having to move all
				the equipment home and use family members and close relatives as participants.
			</p>
			<ImageRow>
				<Image
					caption="First iteration of the poster."
					imagePath="media/images/thesis/poster-version-1.webp"
					maxWidth={'350px'}
					figNumber={3}
				/>
				<Image
					caption="Sign up page where users landed once the QR code had been scanned."
					imagePath="media/images/thesis/signup-page.webp"
					maxWidth={'600px'}
					figNumber={5}
				/>
			</ImageRow>

			<h2>Analyzing driving data</h2>
			<p>
				Each driving attempt produced a .csv document with 10 data points for each passed second.
				Hence why I created a python script for merging all the data into a single .csv file. In the
				script I also gave each column clearer names in the final output without messing with the
				original data.
			</p>
			<Link href="https://github.com/Sandsten/bev-vr-data-analysis" text="Data analyzing script" />

			<p>
				Originally I used Matlab to visualize the data but changed to Python later on when
				continuing with the project after completing my thesis. I will explain it in more detail
				later on.
			</p>

			<h2>Results</h2>

			<ImageRow>
				<Image
					caption="Speed over distance traveled during the first attempt when using the 'Guess-o-meter'. 1 out of 5 succeeded."
					imagePath="media/images/thesis/guess-o-meter-speed-over-distance-1st-attempt.webp"
					maxWidth={'600px'}
					figNumber={6}
				/>
				<Image
					caption="Speed over distance traveled during the second attempt when using the 'Guess-o-meter'.  3 out of 5 succeeded."
					imagePath="media/images/thesis/guess-o-meter-speed-over-distance-2nd-attempt.webp"
					maxWidth={'600px'}
					figNumber={7}
				/>
			</ImageRow>
			<p></p>
			<ImageRow>
				<Image
					caption="Speed over distance traveled during the first attempt when using the 'Guess-o-meter'. 1 out of 5 succeeded."
					imagePath="media/images/thesis/cope1-diff-speed-over-distance-1st-attempt.webp"
					maxWidth={'600px'}
					figNumber={6}
				/>
				<Image
					caption="Speed over distance traveled during the second attempt when using the 'Guess-o-meter'"
					imagePath="media/images/thesis/cope1-diff-speed-over-distance-2nd-attempt.webp"
					maxWidth={'600px'}
					figNumber={7}
				/>
			</ImageRow>

			<h2>Extending my project</h2>

			<Image
				caption="Second iteration of the poster. Attention grabbing incentives and covid precautions."
				imagePath="media/images/thesis/poster-version-2.webp"
				maxWidth={'350px'}
				figNumber={4}
			></Image>
		</Container>
	);
};

export default mastersThesis;
