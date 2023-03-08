import {getPublicOrigin} from './get-public-origin';

export const getOgImageUrlForPost = (title: string, tags: string[], publishedAt: string) => {
	const url = new URL('/api/og', getPublicOrigin());
	url.searchParams.set('title', title);
	url.searchParams.set('publishedAt', publishedAt);

	for (const tag of tags.slice(0, 3)) {
		url.searchParams.append('tags', tag);
	}

	return url.toString();
};
