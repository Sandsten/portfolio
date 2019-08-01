import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { BASE03, BASE2, BASE1, BASE2_SATURATED } from '../constants/colors';

const StyledProject = styled(Link)`
  height: 200px;
  text-decoration: none;
  outline: none;
  color: ${BASE03};

  display: grid;
  grid-template-areas:
    'title img'
    'desc  img'
    'tags  img';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;

  background-color: ${BASE2};
  padding: 10px;
  border-radius: 10px;

  :hover {
    background-color: ${BASE2_SATURATED};
  }
`;

const Title = styled.div`
  grid-area: title;
  font-size: 1.1em;
`;

const Description = styled.div`
  grid-area: desc;
  font-size: 0.9em;
`;

const Image = styled.img`
  grid-area: img;
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

const Tags = styled.div`
  grid-area: tags;
  font-size: 0.9em;
`;

const ProjectCard = ({ data }) => {
  var thumbnail;
  try {
    thumbnail = require(`../img/${data.bgUrl}`);
  } catch (error) {
    thumbnail = '';
  }

  return (
    <StyledProject to={'/projects/' + data.localURL}>
      <Title>
        <b>{data.title}</b>
      </Title>
      <Description>{data.descriptionShort}</Description>
      <Tags>{data.tools.join(', ')}</Tags>
      <Image src={thumbnail} alt={data.title + 'thumbnail'} />
    </StyledProject>
  );
};

export default ProjectCard;
