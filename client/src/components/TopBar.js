import React from 'react';
import styled from 'styled-components';

const StyledTopBar = styled.div`
  grid-area: topbar;
  background-color: orange;
`;

export default function TopBar() {
  return <StyledTopBar />;
}
