import React from 'react';
import styled from 'styled-components';
import { StyledA } from './homePage';

import cvPDF from '../CV-Staffan-EN-V3.pdf';

const StyledCV = styled.div`
  font-size: 1.2em;
  padding: 20px;
  min-height: 100vh;
`;

const cv = () => {
  return (
    <StyledCV>
      <div>Here you can download my CV in pdf format</div>
      <StyledA href={cvPDF}>Download CV</StyledA>
    </StyledCV>
  );
};

export default cv;
