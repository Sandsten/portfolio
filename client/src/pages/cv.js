import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { StyledA } from './homePage';

import cvPDF from '../CV-Staffan-EN-V3.pdf';
import { BASE3, BASE03, BASE02, BASE1 } from '../constants/colors';

const StyledCV = styled.div`
  padding: 20px;
  font-size: 1.2em;
  min-height: 100vh;
  background-color: ${p => (p.theme === 'LIGHT' ? BASE3 : BASE02)};
  color: ${p => (p.theme === 'LIGHT' ? BASE03 : BASE1)};
`;

const cv = () => {
  const theme = useSelector(state => state.appSettings.theme);
  if (!theme) return null;
  return (
    <StyledCV theme={theme}>
      <div>At the moment my CV is only availabe through PDF</div>
      <StyledA theme={theme} href={cvPDF}>
        Download PDF
      </StyledA>
    </StyledCV>
  );
};

export default cv;
