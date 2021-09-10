import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Container, Paragraph } from '../Content/styledComponents';

import { DESKTOP_XS } from '../Constants/sizes';
import { StyledA } from '../Content/RootPages/homePage';

import { DARK_THEME } from '../Constants/colors';

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

	overflow: hidden;

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

export { ImageRow, Image };
