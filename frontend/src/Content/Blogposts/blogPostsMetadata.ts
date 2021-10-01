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
		thumbnail: 'https://staffansandberg.com/healthy-gamer-gg-glossary-to-anki/anki-hgg-added.webp',
		tags: ['Anki', 'Scrape', 'Javascript'],
		date: new Date(2021, 9, 7),
		fullProjectPath: '/posts/healthy-gamer-glossary-to-anki',
	},
	// {
	// 	title: `Attic Flooring`,
	// 	description: `Upgraded attic with plywood flooring. Prior the floor was made up of old shelves and random planks. Now the storage capacity is much greater.`,
	// 	thumbnail: 'https://staffansandberg.com/vinden/vinden-after.webp',
	// 	tags: ['Carpentry', 'Attic', 'DIY'],
	// 	date: new Date(2021, 8, 7),
	// 	fullProjectPath: 'healthy-gamer-glossary-to-anki',
	// },
];

export { blogPostsMetadata };
