import * as React from "react";
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';

import { Container, Paragraph } from '../styledComponents';

import { StyledLink } from "../../Components/Sidebar";
import { MOBILE_XS, DESKTOP_XS } from "../../Constants/sizes";
import { StyledA } from "../RootPages/homePage";

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

  @media(min-width: ${DESKTOP_XS}) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

// Theses are the flex items inside an image row
const StyledFigure = styled.figure`
  /* flex-grow: 1; // Allow item to increase its size along the main axis */
  /* flex-shrink: 1; // Allow item to decrease its size along the main axis */
  /* flex-basis: auto; // */
  /* flex: 1 1 auto; // Same as the three above */

  /* flex: initial; // same as flex: 0 1 auto; */

  // This will center the figure
  margin-left: auto;
  margin-right: auto;
  
  figcaption {
    font-size: 0.9em;
  }

  :hover{
    cursor: pointer;
  }

  // This is when the sidebar moves to the left side
  @media(min-width: ${DESKTOP_XS}) {
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
  max-height: 350px; 
`;

interface ImageProps {
  imageName: string
}
const Image = ({ imageName }:ImageProps) => {

  return (
    <StyledFigure>
      <StyledImage
        src={`https://staffansandberg.com/${imageName}`}>
      </StyledImage>
      <figcaption>
        <em>Hej</em>
      </figcaption>
    </StyledFigure>
  );
}


interface Props {
  
}

const mastersThesis = (props: Props) => {
  return (
    <Container>
      <h1>Master's Thesis</h1>
      <p>Tjs asf</p>
      <h2>The setup</h2>
      <ImageRow>
        <Image imageName="simulator-setup.webp"></Image>
        <Image imageName="driving-in-vr.webp"></Image>
      </ImageRow>
      <h2>Recruiting Participants</h2>
      <Paragraph>Poster placed around KTH Campus to recruit students, staff and anyone who happen to pass by. Since VR is a relatively novel technology I used it as an incentive to try and attract as many participants as possible. And to make signing up as easy as possible I used the free tier of <StyledA href="https://calendly.com/">Calendly</StyledA>  and a generated QR code which takes you directly to the sign up page</Paragraph>
      <ImageRow>
        <Image imageName="poster-version-1.webp"></Image>
        <Image imageName="poster-version-2.webp"></Image>
      </ImageRow>
      <p>
        Bla bla bla. Sign up page
      </p>
      <ImageRow>
        <Image imageName="signup-page.webp"></Image>
      </ImageRow>
    </Container>
  )
}

export default mastersThesis
