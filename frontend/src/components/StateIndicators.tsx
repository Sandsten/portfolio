import styled from "styled-components";

// Pulsating loading text
const Loading = styled.h2`
  @keyframes loading {
    0% {opacity: 1;}
    50% {opacity: 0.5;}
    100% {opacity: 1;}
  }
  animation-name: loading;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  padding-left: 20px;
`;

export {
  Loading
}