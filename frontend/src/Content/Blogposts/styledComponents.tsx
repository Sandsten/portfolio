import styled from 'styled-components';
import { DARK_THEME, LIGHT_THEME } from '../../constants/colors';
import { DESKTOP_XL, DESKTOP_XS,  } from '../../constants/sizes';

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  
  
  @media(min-width: ${DESKTOP_XS}){
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
  }
`;

const BlogPostCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  padding: 0.6em;

	background-color: ${(props) =>
    props.theme.main === 'LIGHT' ? LIGHT_THEME.SIDEBAR : DARK_THEME.SIDEBAR};

  :hover {
    cursor: pointer;
  }

  .description {
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin-top: 0;
  }

  img {
    margin-left: auto;
    border-radius: 10px;
  }
  
  hr {
    width: 100%;
  }

  .metadata {
    display: flex;
    flex-direction: row;
  }

  .date {
    margin-left: auto;
  }

  // When the sidebar moves from top to left
  @media(min-width: ${DESKTOP_XS}) {
    display: inline-flex;
    max-width: 1000px;
  }

  // When the content space becomes a bit larger once the menu is on the left side
  @media(min-width: ${DESKTOP_XL}) {
    .description {
      flex-direction: row;
    } 
  }
`;

export {
  Container,
  BlogPostCard
};