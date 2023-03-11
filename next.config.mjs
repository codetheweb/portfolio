import mdx from '@next/mdx';
import remarkPrism from 'remark-prism';
import remarkFootnotes from 'remark-footnotes';

const withMDX = mdx({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [remarkPrism, remarkFootnotes],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure pageExtensions to include md and mdx
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	// Optionally, add any other Next.js config below
	reactStrictMode: true,
	rewrites: () => [
		{
			source: '/feed.json',
			destination: '/api/feed.json',
		},
		{
			source: '/feed.atom',
			destination: '/api/feed.atom',
		},
		{
			source: '/feed.rss',
			destination: '/api/feed.rss',
		},
	],
	redirects: () => [
		{
			source: '/posts/rendering-5-million-pixel-updates-per-second',
			destination: '/posts/applying-5-million-pixel-updates-per-second',
			permanent: true,
		},
	],
};

export default withMDX(nextConfig);
