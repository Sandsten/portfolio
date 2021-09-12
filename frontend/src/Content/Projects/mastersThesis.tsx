import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Container, Paragraph } from '../styledComponents';

import { DESKTOP_XS } from '../../Constants/sizes';
import { StyledA } from '../RootPages/homePage';

import { DARK_THEME } from '../../Constants/colors';

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

	@media (min-width: ${DESKTOP_XS}) {
		flex-direction: row;
		flex-wrap: nowrap;
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

// Image will determine size of parent figure?
const StyledImage = styled.img`
	// width will match the width of the figure, the figure will adjust it width based on flexbox
	// since aspect ratio is kept the width of the image is limited by the max-height
	width: 100%;
`;

interface ImageProps {
	imageName: string;
	caption: string;
	maxWidth: string;
}

const Image = (props: ImageProps) => {
	const history = useHistory();

	function openImage() {
		// Only works when running on VPS with correct domain
		history.push(`/${props.imageName}`);
	}

	return (
		<StyledFigure onClick={openImage} maxWidth={props.maxWidth}>
			<StyledImage src={`https://staffansandberg.com/${props.imageName}`}></StyledImage>
			<figcaption>
				<em>{props.caption}</em>
			</figcaption>
		</StyledFigure>
	);
};

export const StyledLinkBackground = styled.span`
	background-color: ${DARK_THEME.CARD_BG};
	border-radius: 5px;
	padding: 3px;
`;

interface Props {}

const mastersThesis = (props: Props) => {
	return (
		<Container>
			<h1>Master's Thesis</h1>
			<Paragraph>
				Overview of my Master's thesis plus additional work I did the following year after
				completing the thesis.
			</Paragraph>
			<StyledLinkBackground>
				<StyledA
					href="https://www.diva-portal.org/smash/record.jsf?dswid=9827&pid=diva2%3A1469206&c=1&searchType=UNDERGRADUATE&language=en&query=&af=%5B%5D&
          aq=%5B%5B%7B%22author%22%3A%5B%22Sandberg%2C+Staffan%22%5D%7D%5D%5D&aq2=%5B%5B%7B%22dateIssued%22%3A%7B%22from%22%3A%222020%22%2C%22to%22%3A%222020%22%7D%7D%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=true&sf=all"
				>
					Full paper at DiVa
				</StyledA>
			</StyledLinkBackground>
			<h2>The setup</h2>
			<ImageRow>
				<Image
					caption="Fig 1: Setup of driving simulator. VR headset, steering wheel + pedals, seat, speakers and microphone."
					imageName="simulator-setup.webp"
					maxWidth={'350px'}
				></Image>
				<Image
					caption="Fig 2: View from the driver's perspective in VR."
					imageName="driving-in-vr.webp"
					maxWidth={'700px'}
				></Image>
			</ImageRow>
			<h2>Recruiting Participants</h2>
			<Paragraph>
				Poster placed around KTH Campus to recruit students, staff and anyone who happen to pass by.
				Since VR is a relatively novel technology I used it as an incentive to try and attract as
				many participants as possible. And to make signing up as easy as possible I used the free
				tier of <StyledA href="https://calendly.com/">Calendly</StyledA> and a generated QR code
				which takes you directly to the sign up page
			</Paragraph>
			<ImageRow>
				<Image
					caption="Fig 3: First iteration of the poster."
					imageName="poster-version-1.webp"
					maxWidth={'350px'}
				></Image>
				<Image
					caption="Fig 4: Second iteration of the poster. Attention grabbing incentives and covid precautions."
					imageName="poster-version-2.webp"
					maxWidth={'350px'}
				></Image>
			</ImageRow>
			<ImageRow>
				<Image
					caption="Fig 5: Sign up page where users landed once the QR code had been scanned."
					imageName="signup-page.webp"
					maxWidth={'600px'}
				></Image>
			</ImageRow>
			<Paragraph>Update in progress...</Paragraph>
		</Container>
	);
};

export default mastersThesis;
