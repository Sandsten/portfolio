import * as React from "react";
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';

import { Container, Paragraph } from '../styledComponents';

import { StyledLink } from "../../Components/Sidebar";
import { MOBILE_XS } from "../../Constants/sizes";
import { StyledA } from "../RootPages/homePage";

const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;


const StyledFigure = styled.figure`
  /* max-height: 500px; */
  /* width: auto; */
  margin-left: 0;
  
  figcaption {
    font-size: 0.9em;
  }

  :last-child {
    margin-right: 0;
  }

  :hover{
    cursor: pointer;
  }
`;

// Image will determine size of parent figure?
const StyledImage = styled.img`
  // Width will follow available space. i.e it will shrink when parent becomes to small
  // It can't get too big either since it's limited by max-height
  width: 100%; 
  
  // Height to auto will adjust height to keep aspect ratio
  height: auto;
  
  // This will prevent images from getting too large. 
  max-height: 300px; 

`;

interface ImageProps {
  height: string,
  imageName: string
}
const Image = ({imageName, height}:ImageProps) => {

  return (
    <StyledFigure>
      <StyledImage
        height={height} 
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
        <Image height="400px" imageName="simulator-setup.webp"></Image>
        <Image height="400px" imageName="driving-in-vr.webp"></Image>
      </ImageRow>
      <h2>Recruiting Participants</h2>
      <Paragraph>Poster placed around KTH Campus to recruit students, staff and anyone who happen to pass by. Since VR is a relatively novel technology I used it as an incentive to try and attract as many participants as possible. And to make signing up as easy as possible I used the free tier of <StyledA href="https://calendly.com/">Calendly</StyledA>  and a generated QR code which takes you directly to the sign up page</Paragraph>
      <ImageRow>
        <Image height="500px" imageName="poster-version-1.webp"></Image>
        <Image height="500px" imageName="poster-version-2.webp"></Image>
      </ImageRow>
      <p>
        Bla bla bla. Sign up page
      </p>
      <ImageRow>
        <Image height="500px" imageName="signup-page.webp"></Image>
      </ImageRow>
    </Container>
  )
}

export default mastersThesis
