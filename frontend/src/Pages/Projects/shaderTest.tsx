import * as React from 'react';
import styled from 'styled-components';

import { Container } from '../../Components/Layout';
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
				<Link href="https://www.youtube.com/c/TheArtofCodeIsCool/videos" text="The Art of Code" />{' '}
				where he create visuals through shaders.
			</p>
			<p>
				The example below is a ray marcher where the camera is positioned inside a torus. His
				original implementation is done with shader toy{' '}
				<Link
					href="https://www.shadertoy.com/view/ts2XDw"
					text="https://www.shadertoy.com/view/ts2XDw"
				></Link>
				. And here I've reimplemented it to work with Three.js and React in order to imbed it on my
				website. I'm planning to explore ray marching further in the future with more shapes and
				techniques.
			</p>
			<ShaderContainer>
				<TreeShader />
			</ShaderContainer>
		</Container>
	);
};

export default shaderTest;
