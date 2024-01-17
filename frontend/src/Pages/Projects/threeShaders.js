import React, { useEffect, useState, useRef } from 'react';
import * as Three from 'three';
import * as ThreeHelpers from './Threejs/helpers';
import styled from 'styled-components';

const StyledThreeShader = styled.div`
	height: 500px;
`;

const threeShaders = () => {
	const [isSupported] = useState(ThreeHelpers.isWebGL2Available());
	const parentEl = useRef(null);

	let renderer, uniforms, scene, camera, geometry, material;
	let frameId = null;

	useEffect(() => {
		// Used in shader
		uniforms = {
			u_time: { type: 'f', value: 1.0 },
			u_key_down: { type: 'v2', value: new Three.Vector2() },
			u_resolution: { type: 'v2', value: new Three.Vector2() },
			u_mouse: { type: 'v2', value: new Three.Vector2() },
			u_cameraVel: { type: 'v3', value: new Three.Vector3(0.0, 0.0, 0.0) },
			WORLD_UP: { type: 'v3', value: new Three.Vector3(0.0, 1.0, 0.0) },
			u_sphere: { type: 'v4', value: new Three.Vector4(0.0, 1.0, 8.0, 1.0) },
		};

		// const context = canvasEl.current.getContext('webgl2');
		Three.Plane
		renderer = new Three.WebGLRenderer();
		renderer.setPixelRatio(parentEl.devicePixelRatio);
		parentEl.current.appendChild(renderer.domElement);

		camera = new Three.Camera();
		camera.position.z = 1;
		camera.position.y = 0.5;

		scene = new Three.Scene();

		geometry = new Three.PlaneGeometry(2, 2);

		// Create a material which use our shader
		material = new Three.ShaderMaterial({
			uniforms: uniforms,
			vertexShader: require(`./Threejs/vertex-1.glsl`),
			fragmentShader: require(`./Threejs/fragment-3.glsl`),
		});

		const mesh = new Three.Mesh(geometry, material);
		mesh.name = 'baseShader';
		scene.add(mesh);

		window.addEventListener('resize', onWindowResize, false);
		onWindowResize();

		start();

		return () => {
			console.log('Cleaning up Threejs components');
			cancelAnimationFrame(frameId);
			window.removeEventListener('resize', onWindowResize, false);

			renderer = null;
			renderer = null;
			uniforms = null;
			scene = null;
			camera = null;
			geometry = null;
			material = null;
		};
	}, []); // Don't forget the last empty angled brackets! Otherwise this + cleanup will trigger on state change too.

	function start() {
		if (!frameId) {
			// call this when you want to start the animation, ensures that the reference is always correct
			// so we can be sure that it will be canceled when the component unmounts.
			frameId = requestAnimationFrame(animate);
		}
	}

	function animate() {
		frameId = requestAnimationFrame(animate);
		render();
	}

	function render() {
		uniforms.u_time.value += 0.05;
		renderer.render(scene, camera);
	}

	function onWindowResize(ev) {
		const width = parentEl.current.clientWidth;
		const height = parentEl.current.clientHeight;
		uniforms.u_resolution.value.x = width;
		uniforms.u_resolution.value.y = height;

		console.log(width, height);

		renderer.setSize(width, height);
	}

	if (!isSupported) return <div>Your browser does not support Webgl 2</div>;

	return <StyledThreeShader ref={parentEl} />;
};

export default threeShaders;
