import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

export interface Post {
	meta: {
		title: string;
		date: `${number}-${number}-${number}`;
	};
	slug: string;
}

export const getPosts = async (): Promise<Post[]> => {
	const dirFiles = fs.readdirSync(path.join(process.cwd(), 'pages', 'posts'), {
		withFileTypes: true,
	});

	const posts = await Promise.all(dirFiles
		.map(async file => {
			if (!file.name.endsWith('.mdx')) {
				return;
			}

			const {meta} = await import(`../pages/posts/${file.name}`) as {meta: Post['meta']};

			const slug = file.name.replace(/.mdx$/, '');
			return {meta, slug};
		}));

	return posts.filter(Boolean) as Post[];
};
