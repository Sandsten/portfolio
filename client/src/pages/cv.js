import React from 'react';
import styled from 'styled-components';
import { StyledA } from './homePage';

import cvPDF from '../CV-Staffan-EN-V3.pdf';
import { BASE3 } from '../constants/colors';

const StyledCV = styled.div`
  padding: 20px;
  font-size: 1.2em;
  background-color: ${BASE3};
`;

const cv = () => {
  return (
    <StyledCV>
      <div>At the moment my CV is only availabe through PDF</div>
      <StyledA href={cvPDF}>Download PDF</StyledA>
    </StyledCV>
  );
};

export default cv;
