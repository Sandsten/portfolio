import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/*
  TODO: 
  * Create different components for showing code, text & images
  * Make the interface for editing these similar to a jupyter notebook!

  I should probably make a separate component out of a cell!
  The cell should be similar to cells in jupyter notebooks
  It will either show text in markdown or code

  When creating a tutorial I want to be able to create new cells
  Enter text into cells & format them depending on if I want to show code, text or an image
*/

const StyledCodeSection = styled.div`

  // IDEA: Show the section in a code style format!

`;

const tutorials = () => {
  return (
    <div>Tutorials!</div>
  )
}

export default tutorials;
