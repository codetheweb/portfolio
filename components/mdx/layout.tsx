import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import Head from 'next/head';
import TextLink from '../text-link';
import Header from '../header';
import styles from './styles/layout.module.scss';

dayjs.extend(relativeTime);

interface MdxLayoutProps {
	children: React.ReactNode;
	meta: {
		title: string;
		tags: string[];
		date: string;
	};
}

const getOgImagePath = (title: string, tags: string[], publishedAt: string) => {
	const url = new URL('/api/og', process.env.NEXT_PUBLIC_VERCEL_URL);
	url.searchParams.set('title', title);
	url.searchParams.set('publishedAt', publishedAt);

	for (const tag of tags) {
		url.searchParams.append('tags', tag);
	}

	return url.toString();
};

export const MdxLayout = ({children, meta}: MdxLayoutProps) => {
	const publishedAt = dayjs(meta.date).format('MMMM D, YYYY');
	return (
		<div className={styles.container}>
			<Head>
				<title>{meta.title}</title>

				<meta property="og:image" content={getOgImagePath(meta.title, meta.tags.slice(0, 3), publishedAt)}/>
			</Head>

			<Header size="h3">{meta.title}</Header>

			<p className={styles.date}>
				{} ({dayjs(meta.date).fromNow()})
			</p>

			<main>
				{children}
			</main>

			<TextLink href="/">return to home</TextLink>
		</div>
	);
};
