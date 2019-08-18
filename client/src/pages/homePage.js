import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { DESKTOP_XS, DESKTOP_XL } from '../constants/sizes';
import { BLUE } from '../constants/colors';
import { Spacer } from './projects';

import '../CSSTransitions/transitions.scss';

const StyledProjectPage = styled.div`
  display: block;
  min-height: 100vh;
  padding: 0 20px 0 20px;
  font-size: 1em;

  @media (min-width: ${DESKTOP_XS}) {
    font-size: 1.2em;
    width: 70vw;
  }

  @media (min-width: ${DESKTOP_XL}) {
    width: 50vw;
  }
`;

export const StyledA = styled.a`
  margin-bottom: 5px;
  text-decoration: none;
  outline: none;
  color: ${BLUE};

  :hover {
    text-decoration: underline;
  }
`;

const Contact = styled.div`
  ${StyledA} {
    margin-right: 20px;
  }
`;

const CONTENT = [
  <p>
    Hello and welcome to my website. My name is Staffan Sandberg and I'm currently in the final stretch of my studies at{' '}
    <StyledA href="https://www.kth.se/"> Kungliga Tekniska Högskolan</StyledA> in the master's programme{' '}
    <StyledA href="https://www.kth.se/en/studies/master/interactivemediatechnology/description-1.593765">
      Interactive media technology
    </StyledA>
    .
  </p>,
  <p>
    My bachelor was in{' '}
    <StyledA href="https://www.kth.se/student/kurser/program/TSVDK/20122/mal">
      Simulation Technology and Virtual Design
    </StyledA>{' '}
    also at KTH. Which sparked my interest for programming and graphics.
  </p>,
  <p>
    My main interests are web development, game design and computer graphics. I also enjoy tinkering with servers,
    networks and general linux based operating systems.
  </p>,
  <p>In my free time I enjoy playing guitar, video games, reading books and learning new things in general.</p>,
  <p>
    On this site you can see different projects that I've been a part of and blog posts about things I've learnt and
    want to share.
  </p>,
  <p>
    {' '}
    I'm always open to new opportunities.
    <br />
    You can find and contact me here:
  </p>,
  <Contact>
    <StyledA href="https://www.linkedin.com/in/stsa/">Linkedin</StyledA>
    <StyledA href="https://github.com/Sandsten">Github</StyledA>
    <StyledA target="_blank" href="mailto:stsand@kth.se" rel="noopener noreferrer">
      Email
    </StyledA>
  </Contact>
];

const homePage = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const staggerDelay = 0.02;

  return (
    <StyledProjectPage>
      {CONTENT.map((paragraph, i) => {
        return (
          <CSSTransition
            key={i}
            in={shouldAnimate}
            appear={shouldAnimate}
            classNames="fade"
            timeout={500}
            style={{ transitionDelay: `${(i + 1) * staggerDelay}s` }}
          >
            {paragraph}
          </CSSTransition>
        );
      })}
      <Spacer />
    </StyledProjectPage>
  );
};

export default homePage;
