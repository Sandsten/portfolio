import * as React from 'react';
import styled from 'styled-components';

import { Container } from '../styledComponents';
import TreeShader from './threeShaders';

import projectsMetadata from '../Projects/projectsMetadata';
import { StyledA } from '../RootPages/homePage';

interface Props {}
const shaderTest = (props: Props) => {
	return (
		<Container>
			<h1>Shader Exploration</h1>
			<p>
				Experimenting with implementation of vertex and fragment shaders using Three.js. I follow an
				amazing Youtube channel called{' '}
				<StyledA href="https://www.youtube.com/c/TheArtofCodeIsCool/videos">
					The Art of Code
				</StyledA>
			</p>
			<p>
				<TreeShader />
			</p>
		</Container>
	);
};

export default shaderTest;
