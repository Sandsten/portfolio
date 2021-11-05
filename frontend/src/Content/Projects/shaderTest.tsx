import * as React from 'react';
import styled from 'styled-components';

import { Container } from '../styledComponents';
import TreeShader from './threeShaders';

import Link from '../../Components/Link';

const ShaderContainer = styled.div`
	max-width: 1000px;
`;

interface Props {}
const shaderTest = (props: Props) => {
	return (
		<Container>
			<h1>Shader Exploration</h1>
			<p>
				Experimenting with implementation of vertex and fragment shaders using Three.js. I follow an
				amazing Youtube channel called{' '}
				<Link href="https://www.youtube.com/c/TheArtofCodeIsCool/videos" text="The Art of Code" />
			</p>
			<ShaderContainer>
				<TreeShader />
			</ShaderContainer>
		</Container>
	);
};

export default shaderTest;
