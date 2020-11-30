import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  grid-area: content;

  border-width: 5px;
  border-radius: 5px;
  border-color: orange;

  margin: 5px;
  background-color: white;

  width: 100%;
`;

const TextArea = styled.textarea`
  height: 0px;

  //position: absolute;
  //bottom: -1em;
`;

const Cell = () => {
  const [text, setText] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const [inputArea, setInputArea] = useState(null);

  useEffect(() => {
    console.log(text);
    // console.log(isActive);
    console.log(inputArea);
    if (isActive)
      if (inputArea) inputArea.focus();
  })

  return (
    <Container onClick={() => {
      setIsActive(true);
      inputArea.focus();
    }}>
      { text}
      < TextArea ref={ref => setInputArea(ref)} onChange={event => setText(event.target.value)} />
    </Container >
  );
}

export default Cell;