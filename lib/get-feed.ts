import {Feed} from 'feed';
import {getOgImageUrlForPost} from './get-og-image-url-for-post';
import {getPosts} from './get-posts';

export const getFeed = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL!;

	const feed = new Feed({
		title: 'Max Isom',
		description: 'Max Isom\'s personal website',
		id: baseUrl,
		link: baseUrl,
		language: 'en',
		copyright: 'Max Isom',
		image: new URL('/images/favicon/android-chrome-512x512.png', baseUrl).toString(),
		favicon: new URL('/images/favicon/favicon.ico', baseUrl).toString(),
		feedLinks: {
			json: new URL('/feed.json', baseUrl).toString(),
			atom: new URL('/feed.atom', baseUrl).toString(),
			rss: new URL('/feed.rss', baseUrl).toString(),
		},
	});

	for (const post of await getPosts()) {
		const fullUrl = new URL('/posts/' + post.slug, baseUrl).toString();

		feed.addItem({
			title: post.meta.title,
			id: fullUrl,
			link: fullUrl,
			author: [
				{
					name: 'Max Isom',
					link: baseUrl,
				},
			],
			date: new Date(post.meta.date),
			image: getOgImageUrlForPost(post.meta.title, post.meta.tags, post.meta.date),
		});
	}

	return feed;
};
