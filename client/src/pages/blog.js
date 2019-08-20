import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

//TODO: Maybe convert this to some general wrapper for the main page
const StyledBlog = styled.div`
  font-size: 1em;
  padding: 20px;
  min-height: 100vh;
`;

const codeString = `const getFalse = () => { 
  return false;
}`;

// Use this for displayig code
const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  font-size: 1em;
`;

const blog = () => {
  return (
    <StyledBlog>
      No blog posts at the moment
      <StyledSyntaxHighlighter language="javascript" style={darcula} showLineNumbers>
        {codeString}
      </StyledSyntaxHighlighter>
      <code>hello</code>
    </StyledBlog>
  );
};

export default blog;
