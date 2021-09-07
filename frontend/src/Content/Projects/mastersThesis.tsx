import * as React from "react";
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';

import { StyledLink } from "../../components/Sidebar";
import { MOBILE_XS } from "../../constants/sizes";
import { StyledA } from "../../pages/homePage";

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  
  @media(min-width: ${MOBILE_XS}){
    margin-left: 20px;
  }
`;

const P = styled.p`
  @media(min-width: ${MOBILE_XS}){
    max-width: 1000px;
  }
`;

const StyledImage = styled.img`
  width: ${(p) => p.width} ;
  margin-left: 10px;
  
  :hover{
    cursor: pointer;
  }
  // Block will take up the entire width of the page and auto margin for left and right will center the image
  /* margin-left: auto; */
  /* margin-right: auto; */
`;

interface ImageProps {
  height: string,
  imageName: string
}
const Image = ({imageName, height}:ImageProps) => {

  return (
    <a href={`https://staffansandberg.com/${imageName}`}>
      <StyledImage 
        height={height} 
        src={`https://staffansandberg.com/${imageName}`}>
      </StyledImage>
    </a>
  );
}

const ImageRow = styled.div`
  display: "flex";
  :first-child {
    img {
      margin-left: 0;
    }
  }
`;

interface Props {
  
}

const mastersThesis = (props: Props) => {
  return (
    <Container>
      <h1>Master's Thesis</h1>
      <P>Hej hej</P>
      <p>Tjs asf</p>
      <h2>The setup</h2>
      <ImageRow>
        <Image height="400px" imageName="simulator-setup.webp"></Image>
        <Image height="400px" imageName="driving-in-vr.webp"></Image>
      </ImageRow>
      <h2>Recruiting Participants</h2>
      <P>Poster placed around KTH Campus to recruit students, staff and anyone who happen to pass by. Since VR is a relatively novel technology I used it as an incentive to try and attract as many participants as possible. And to make signing up as easy as possible I used the free tier of <StyledA href="https://calendly.com/">Calendly</StyledA>  and a generated QR code which takes you directly to the sign up page</P>
      <ImageRow>
        <Image height="500px" imageName="poster-version-1.webp"></Image>
        <Image height="500px" imageName="poster-version-2.webp"></Image>
      </ImageRow>
      <p>
        Bla bla bla. Sign up page
      </p>
        <Image height="500px" imageName="signup-page.webp"></Image>
    </Container>
  )
}

export default mastersThesis
