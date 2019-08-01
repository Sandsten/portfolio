import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: red;
`;

export class Red extends Component {
  render() {
    return <Background>RED</Background>;
  }
}

export default Red;
