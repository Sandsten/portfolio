import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { BASE03, BASE2, BASE01, BASE2_SATURATED, BASE02_SATURATED, BASE1 } from '../constants/colors';

const StyledProjectCard = styled(Link)`
  height: 200px;
  text-decoration: none;
  outline: none;
  color: ${p => (p.theme === 'LIGHT' ? BASE03 : BASE1)};

  display: grid;
  grid-template-areas:
    'title img'
    'desc  img'
    'tags  img';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;

  background-color: ${p => (p.theme === 'LIGHT' ? BASE2 : BASE02_SATURATED)};
  padding: 10px;
  border-radius: 10px;

  :hover {
    background-color: ${p => (p.theme === 'LIGHT' ? BASE2_SATURATED : BASE03)};
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
  filter: ${p => (p.theme === 'LIGHT' ? 'none' : 'brightness(80%)')};
`;

const Tags = styled.div`
  grid-area: tags;
  font-size: 0.9em;
`;

const ProjectCard = ({ data, theme }) => {
  var thumbnail;
  try {
    thumbnail = require(`../img/bg/${data.bgUrl}`);
  } catch (error) {
    thumbnail = '';
  }

  return (
    <StyledProjectCard theme={theme} to={'/projects/' + data.localURL}>
      <Title>
        <b>{data.title}</b>
      </Title>
      <Description>{data.descriptionShort}</Description>
      <Tags>{data.tools.join(', ')}</Tags>
      <Image src={thumbnail} alt={data.title + 'thumbnail'} />
    </StyledProjectCard>
  );
};

export default ProjectCard;
