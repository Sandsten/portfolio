import Image from '../../Components/Image/Image';
import ImageRow from '../../Components/ImageRow/ImageRow';
import { Container } from '../../Components/Layout';
import VideoPlayer from '../../Components/VideoPlayer';
import Link from '../../Components/Link';

// import 
import diffcope1 from "../../assets/images/thesis/diff+cope1.webp";
import guessometer from "../../assets/images/thesis/guess-o-meter.webp";
import simulatorsetup from "../../assets/images/thesis/simulator-setup.webp";
import posterversion2 from "../../assets/images/thesis/poster-version-2.webp";
import signuppage from "../../assets/images/thesis/signup-page.webp";
import poweroverdistance from "../../assets/images/thesis/power-over-distance.webp";
/*
  FLEX DEFAULTS
  * Items display in a row (the flex-direction property's default is row).
  * The items start from the start edge of the main axis.
  * The items do not stretch on the main dimension, but can shrink.
  * The items will stretch to fill the size of the cross axis.
  * The flex-basis property is set to auto.
  * The flex-wrap property is set to nowrap
*/

const mastersThesis = () => {

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
				inText={false}
			/>
			{' '}
			<Link href="https://github.com/Sandsten/bev-vr-simulator" text="Unity Project" inText={false} />
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

			<p>
				These are the two dashboards I implemented for each group. In Figure 1 we can see the novel one which aims to be transparent regarding how speed affects range.
				Where each vertical green bar shows how far you can drive if maintaining a certain speed. The original design was invented by my supervisor where I came up with the
				addition of the vertical blue line representing distance left to target.
			</p>

			<ImageRow>
				<Image
					imagePath={diffcope1}
					caption='Novel dashboard based on previous research. With the addition of a horizontal blue line for distance to target.'
					figNumber={1}
					maxWidth='500px'
				/>
				<Image
					imagePath={guessometer}
					caption='Conventional dashboard sometimes referred to as a "guess-o-meter".'
					figNumber={2}
					maxWidth='500px'
				/>
			</ImageRow>

			<p>
				In the following two videos we can see the point of view of participants from each group when entering a highway. The design of the track had an initial slow part of 40 km/h followed by a highway at 110 km/h. Since this is a common scenario in which the guess-o-meter (Figure 2) can drastically reduce its estimate without the driver noticing. Where the novel dashboard (Figure 1) aims to give the user room for planning ahead, and to realize that 110 km/h most probably can't be maintained if the goal is to be reached.
			</p>

			<ImageRow>
				<VideoPlayer
					src="https://www.youtube.com/embed/_AtB8SAgGx0"
					maxWidth="500px"
					title="Novel heads-up display in BEV"
				/>
				<VideoPlayer
					src="https://www.youtube.com/embed/T2p7Rt-5WcI"
					maxWidth="500px"
					title="Conventional 'Guess-o-meter' in BEV"
				/>
			</ImageRow>

			<p>This is how the simulator was set up. Steering wheel, pedals, chair, VR headset, microphone, speakers and a desktop PC.</p>

			<Image
				caption="Setup of driving simulator. VR headset, steering wheel + pedals, seat, speakers and microphone."
				imagePath={simulatorsetup}
				maxWidth={'350px'}
				figNumber={3}
			/>

			{/* <h2>Procedure</h2>

      <p className='todo'>Talk about the procedure for each study. Intro + driving + questionnaire + interview</p> */}

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
					caption="Poster for recruting participants. VR games as incentive."
					imagePath={posterversion2}
					// imagePath="media/images/thesis/poster-version-1.webp"
					maxWidth={'350px'}
					figNumber={3}
				/>
				<Image
					caption="Sign up page where users landed once the QR code had been scanned."
					imagePath={signuppage}
					maxWidth={'600px'}
					figNumber={4}
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

			<h2>Results</h2>

			<Image
				caption="Average power over distance traveled during the first attempt."
				imagePath={poweroverdistance}
				maxWidth={'1000px'}
				figNumber={6}
			/>
		</Container>
	);
};

export default mastersThesis;
