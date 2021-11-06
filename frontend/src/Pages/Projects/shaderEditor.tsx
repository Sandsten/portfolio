import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';

import ShaderViewer from '../../Components/ShaderViewer';

const Test = styled.div`
	overflow-x: hidden; // Need this for canvas to scale when resizing window, don't know why though
`;

interface Props {}
const shaderEditor = (props: Props) => {
	return (
		<Test>
			<ShaderViewer vertexShader="vertex-1.glsl" fragmentShader="fragment-3.glsl" />
		</Test>
	);
};

export default shaderEditor;
