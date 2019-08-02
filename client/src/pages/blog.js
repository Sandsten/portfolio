import React from 'react';
import styled from 'styled-components';
import { BASE3 } from '../constants/colors';

const StyledBlog = styled.div`
  font-size: 1.2em;
  padding: 20px;

  background-color: ${BASE3};
`;

const blog = () => {
  return <StyledBlog>No blog posts at the moment</StyledBlog>;
};

export default blog;
