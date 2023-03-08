import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import Head from 'next/head';
import {Home} from 'react-feather';
import Link from 'next/link';
import TextLink from '../text-link';
import Header from '../header';
import {getOgImageUrlForPost} from '../../lib/get-og-image-url-for-post';
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

export const MdxLayout = ({children, meta}: MdxLayoutProps) => {
	const publishedAt = dayjs(meta.date).format('MMMM D, YYYY');
	return (
		<div className={styles.container}>
			<Head>
				<title>{meta.title}</title>

				<meta property="og:image" content={getOgImageUrlForPost(meta.title, meta.tags, meta.date)}/>
			</Head>

			<Header size="h3">{meta.title}</Header>

			<p className={styles.date}>
				{publishedAt} ({dayjs(meta.date).fromNow()})
			</p>

			<main>
				{children}
			</main>

			<hr/>

			<p>
				interested in hearing about new posts? <TextLink href="https://twitter.com/mtisom">follow me</TextLink> or subscribe to a <TextLink href="/feed.rss">RSS</TextLink>, <TextLink href="/feed.atom">Atom</TextLink>, or <TextLink href="/feed.json">JSON</TextLink> feed.
			</p>

			<Link href="/" className={styles.homeButtonContainer}>
				<span className={styles.homeButtonIcon}>
					<Home/>
				</span>
			</Link>
		</div>
	);
};
