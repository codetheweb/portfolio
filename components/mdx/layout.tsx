import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import Head from 'next/head';
import TextLink from '../text-link';
import {getOgImageUrlForPost} from '../../lib/get-og-image-url-for-post';
import {getPublicOrigin} from '../../lib/get-public-origin';
import {HoveringHomeButton} from '../hovering-home-button';
import styles from './styles/layout.module.scss';

dayjs.extend(relativeTime);

interface MdxLayoutProps {
	children: React.ReactNode;
	meta: {
		title: string;
		tags: string[];
		date: string;
		slug: string;
		description: string;
	};
}

export const MdxLayout = ({children, meta}: MdxLayoutProps) => {
	const publishedAt = dayjs(meta.date).format('MMMM D, YYYY');
	const postUrl = new URL('/posts/' + meta.slug, getPublicOrigin()).toString();

	return (
		<div className={styles.container}>
			<Head>
				<title>{meta.title}</title>

				<meta property="og:title" content={meta.title}/>
				<meta property="og:description" content={meta.description}/>
				<meta property="og:image" content={getOgImageUrlForPost(meta.title, meta.tags, meta.date)}/>
				<meta property="og:url" content={postUrl}/>
				<meta property="og:type" content="website"/>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta property="twitter:domain" content={getPublicOrigin()}/>
				<meta property="twitter:url" content={postUrl}/>
				<meta name="twitter:image" content={getOgImageUrlForPost(meta.title, meta.tags, meta.date)}/>
			</Head>

			<h1>{meta.title}</h1>

			<p className={styles.date}>
				{publishedAt} ({dayjs(meta.date).fromNow()})
			</p>

			<main>
				{children}
			</main>

			<hr/>

			<p>
				Interested in hearing about new posts? <TextLink href="https://twitter.com/mtisom">Follow me</TextLink> or subscribe to a <TextLink href="/feed.rss">RSS</TextLink>, <TextLink href="/feed.atom">Atom</TextLink>, or <TextLink href="/feed.json">JSON</TextLink> feed.
			</p>

			<HoveringHomeButton/>
		</div>
	);
};
