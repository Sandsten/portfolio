export interface BlogPost {
	title: string;
	description: string;
	thumbnail: string;
	tags: Array<string>;
	fullProjectPath: string;
	date: Date;
}

const blogPostsMetadata: Array<BlogPost> = [
	{
		title: `Dr. K's guide glossary to Anki`,
		description: `Easily extract the glossary, turn it into an Anki deck and add it to your Anki collection`,
		thumbnail: 'https://staffansandberg.com/healthy-gamer-gg-glossary-to-anki/glossary-added.webp',
		tags: ['Anki', 'Scrape', 'Javascript'],
		date: new Date(2021, 9, 7),
		fullProjectPath: 'healthy-gamer-glossary-to-anki',
	},
];

export { blogPostsMetadata };
