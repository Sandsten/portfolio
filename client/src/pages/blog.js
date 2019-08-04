import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BASE3, BASE03, BASE02, BASE1 } from '../constants/colors';

const StyledBlog = styled.div`
  font-size: 1.2em;
  padding: 20px;
  min-height: 100vh;
  background-color: ${p => (p.theme === 'LIGHT' ? BASE3 : BASE02)};
  color: ${p => (p.theme === 'LIGHT' ? BASE03 : BASE1)};
`;

const blog = () => {
  const theme = useSelector(state => state.appSettings.theme);

  if (!theme) return null;

  return <StyledBlog theme={theme}>No blog posts at the moment</StyledBlog>;
};

export default blog;
