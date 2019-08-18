import React from 'react';
import styled from 'styled-components';

//TODO: Maybe convert this to some general wrapper for the main page
const StyledBlog = styled.div`
  font-size: 1.2em;
  padding: 20px;
  min-height: 100vh;
`;

const blog = () => {
  return <StyledBlog>No blog posts at the moment</StyledBlog>;
};

export default blog;
