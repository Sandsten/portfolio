import React from 'react';
import styled from 'styled-components';
import { DESKTOP_XS, DESKTOP_XL } from '../constants/sizes';

//TODO: Maybe convert this to some general wrapper for the main page
const StyledBlog = styled.div`
  font-size: 1em;
  padding: 20px;
  min-height: 100vh;

  @media (min-width: ${DESKTOP_XS}) {
    font-size: 1.2em;
    width: 70vw;
  }

  @media (min-width: ${DESKTOP_XL}) {
    width: 50vw;
  }
`;

// TODO: Render a list of blogposts
const blog = () => {
  return (
    <StyledBlog>
      Work in progress
      {/* <StyledSyntaxHighlighter language="javascript" style={darcula} showLineNumbers>
        {codeString}
      </StyledSyntaxHighlighter>
      <code>hello</code> */}
    </StyledBlog>
  );
};

export default blog;
