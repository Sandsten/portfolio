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
		title: `Whiny devices`,
		description: `Why are some home devices designed to be so whiny? Mircowaves and washing machines screams in a high pitch when they are done, and won't stop until we tend to them. I belive the user experience could be so much more plesant by rethinking `,
		thumbnail: 'https://staffansandberg.com/media/images/thumbnails/Bosh%20maxx%207%20VarioPerfect%20how%20to%20turn%20off%20the%20beeping%20poster.webp',
		tags: ['UX', 'Home Appliances', 'Annoying'],
		date: new Date(2021, 9, 21),
		fullProjectPath: '/posts/whiny-devices',
	},
	{
		title: `Dr. K's guide glossary to Anki`,
		description: `Easily extract the glossary, turn it into an Anki deck and add it to your Anki collection`,
		thumbnail: 'https://staffansandberg.com/media/images/thumbnails/anki-hgg-added.webp',
		tags: ['Anki', 'Scrape', 'Javascript'],
		date: new Date(2021, 8, 7),
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
