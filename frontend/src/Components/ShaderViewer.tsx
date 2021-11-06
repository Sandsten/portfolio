import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

import * as ThreeHelpers from '../Pages/Projects/Threejs/helpers';

interface Props {
	vertexShader: string;
	fragmentShader: string;
}
const ShaderViewer = (props: Props) => {
	const [isSupported] = useState(ThreeHelpers.isWebGL2Available());
	const parentEl = useRef<HTMLDivElement | null>(null);

	let renderer: THREE.WebGLRenderer;
	let uniforms: any; // TODO: Find the correct type
	let scene: THREE.Scene;
	let camera: THREE.Camera;
	let geometry: THREE.PlaneBufferGeometry;
	let material: THREE.ShaderMaterial;
	let frameId: number | null = null;

	useEffect(() => {
		console.log('INITIALIZE SCENE!');
		// Define variables which will be available in the shader
		uniforms = {
			u_time: { type: 'f', value: 1.0 },
			u_key_down: { type: 'v2', value: new THREE.Vector2() },
			u_resolution: { type: 'v2', value: new THREE.Vector2() },
			u_mouse: { type: 'v2', value: new THREE.Vector2() },
			u_cameraVel: { type: 'v3', value: new THREE.Vector3(0.0, 0.0, 0.0) },
			WORLD_UP: { type: 'v3', value: new THREE.Vector3(0.0, 1.0, 0.0) },
			u_sphere: { type: 'v4', value: new THREE.Vector4(0.0, 1.0, 8.0, 1.0) },
		};

		// const context = canvasEl.current.getContext('webgl2');
		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		parentEl.current?.appendChild(renderer.domElement);

		camera = new THREE.Camera();
		camera.position.z = 1;
		camera.position.y = 0.5;

		scene = new THREE.Scene();

		geometry = new THREE.PlaneBufferGeometry(2, 2);

		console.log(props.vertexShader, props.fragmentShader);

		// Create a material which use our shader
		material = new THREE.ShaderMaterial({
			uniforms: uniforms,
			vertexShader: require(`../Pages/Projects/Threejs/${props.vertexShader}`),
			fragmentShader: require(`../Pages/Projects/Threejs/${props.fragmentShader}`),
		});

		const mesh = new THREE.Mesh(geometry, material);
		mesh.name = 'baseShader';
		scene.add(mesh);

		window.addEventListener('resize', onWindowResize, false);
		onWindowResize();

		start();

		return () => {
			console.log('Cleaning up Threejs components');
			if (frameId) cancelAnimationFrame(frameId);
			window.removeEventListener('resize', onWindowResize, false);

			// renderer = null;
			// renderer = null;
			// uniforms = null;
			// scene = null;
			// camera = null;
			// geometry = null;
			// material = null;
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

	function onWindowResize() {
		const width = parentEl.current?.clientWidth;
		const height = parentEl.current?.clientHeight;
		uniforms.u_resolution.value.x = width;
		uniforms.u_resolution.value.y = height;

		if (width && height) renderer.setSize(width, height);
	}

	if (!isSupported) return <div>Your browser does not support Webgl 2</div>;

	return <div ref={parentEl}></div>;
};

export default ShaderViewer;
