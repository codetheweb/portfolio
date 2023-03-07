import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import matter from 'gray-matter';

export const getPosts = () => {
	const dirFiles = fs.readdirSync(path.join(process.cwd(), 'pages', 'posts'), {
		withFileTypes: true,
	});

	const posts = dirFiles
		.map(file => {
			if (!file.name.endsWith('.mdx')) {
				return;
			}

			const fileContent = fs.readFileSync(
				path.join(process.cwd(), 'pages', 'posts', file.name),
				'utf-8',
			);
			const {data, content} = matter(fileContent);

			const slug = file.name.replace(/.mdx$/, '');
			return {data, content, slug};
		})
		.filter(post => post);

	return posts;
};
