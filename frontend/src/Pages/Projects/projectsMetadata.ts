import { ProjectMetadata } from '../../Types/projectsMetadata';

const projectsMetadata: Array<ProjectMetadata> = [
	{
		title: `Master's Thesis`,
		description: `I built a VR driving simulator in Unity to investigate how drivers behave in a range critical situation`,
		thumbnail: 'https://staffansandberg.com/media/images/thumbnails/thesis-thumbnail.webp',
		tags: ['Thesis', 'VR', 'Unity'],
		fullProjectPath: 'masters-thesis',
	},
	{
		title: `Shader Exploration`,
		description: `Exploring vertex and fragment shaders with Three.js`,
		thumbnail: 'https://staffansandberg.com/media/images/thumbnails/WebGL.webp',
		tags: ['GLSL', 'Three.js', 'Math'],
		fullProjectPath: 'shader-exploration',
	},
	// {
	// 	title: `Tracking Card Game`,
	// 	description: `Using AR to track a card game`,
	// 	thumbnail: 'https://staffansandberg.com/media/images/thumbnails/thesis-thumbnail.webp',
	// 	tags: ['AR', 'Unity'],
	// 	fullProjectPath: 'ar-card-game',
	// },
];

export default projectsMetadata;
