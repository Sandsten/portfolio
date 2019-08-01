import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { BASE03 } from '../constants/colors';

const StyledProject = styled(Link)`
  height: 200px;
  text-decoration: none;
  outline: none;
  color: ${BASE03};
`;

const Title = styled.div`
  font-size: 1.1em;
`;

const Description = styled.div`
  font-size: 0.9em;
`;

const ProjectCard = props => {
  const { title, descriptionShort, localURL } = props.data;

  return (
    <StyledProject to={'/projects/' + localURL}>
      <Title>
        <b>{title}</b>
      </Title>
      <Description>{descriptionShort}</Description>
    </StyledProject>
  );
};

export default ProjectCard;
