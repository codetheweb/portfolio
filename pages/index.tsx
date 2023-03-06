import React from 'react';
import {DateTime} from 'luxon';
import {GetStaticProps} from 'next';
import Title from '../components/title';
import ProjectTile, {ProjectTileProps} from '../components/project-tile';
import SocialButtons from '../components/social-buttons';
import TextLink from '../components/text-link';
import {useFirstLoad} from '../lib/first-load';
import {getPosts} from '../lib/get-posts';
import styles from './styles/index.module.scss';

import courseHeroLightImg from '/public/images/courses/promo-light.png';
import courseHeroDarkImg from '/public/images/courses/promo-dark.png';
import aoedeLogoImg from '/public/images/aoede/logo.png';
import xkcdyHeroImg from '/public/images/xkcdy/hero.png';
import linkhereLightImg from '/public/images/linkhere/promo-light.png';
import linkhereDarkImg from '/public/images/linkhere/promo-dark.png';
import museLogoImg from '/public/images/muse/logo.png';
import tuyapiLogoImg from '/public/images/tuyapi/logo.png';

const PROJECTS: ProjectTileProps[] = [
	{
		name: 'MTU Courses',
		year: '2021',
		description: 'Find courses. Plan your semester.',
		technologies: ['Next.js', 'NestJS', 'Kubernetes'],
		image: {
			src: courseHeroLightImg,
			// Seems to be a bug with Next.js/Image where if `priority={true}`
			// is set it doesn't re-render when source changes?
			hasPriority: false,
			alt: 'Screenshot of MTU Courses',
			dark: {
				src: courseHeroDarkImg,
				hasPriority: false,
			},
		},
	},
	{
		image: {
			src: aoedeLogoImg,
			alt: 'Aoede logo',
			hasPriority: true,
		},
		name: 'Aoede',
		year: '2021',
		description: 'A self-hosted Discord music bot that directly streams from Spotify to Discord.',
		technologies: ['Rust'],
	},
	{
		video: '/videos/xkcdy/promo.mp4',
		isVideoRounded: true,
		isVideoShadowed: true,
		isImageAlignedWithBottom: true,
		image: {
			src: xkcdyHeroImg,
			alt: 'XKCDY hero image',
			hasPriority: true,
		},
		name: 'XKCDY',
		year: '2020',
		description: 'A modern, open source iOS client for XKCD.',
		technologies: ['Swift', 'SwiftUI', 'Typescript'],
	},
	{
		image: {
			src: linkhereLightImg,
			alt: 'screenshot of linkhere',
			dark: {
				src: linkhereDarkImg,
			},
		},
		name: 'linkhere',
		year: '2020',
		description: 'A simple web extension that unobtrusively shows websites saved from your mobile device in new tabs.',
		technologies: ['React', 'Typescript'],
	},
	{
		image: {
			src: museLogoImg,
			alt: 'Muse logo',
		},
		name: 'Muse',
		year: '2020',
		description: 'A self-hosted midwestern Discord music bot that doesn\'t suck.',
		technologies: ['Typescript', 'Discord.js'],
	},
	{
		video: '/videos/filmboard/promo.mp4',
		isVideoRounded: true,
		isVideoShadowed: true,
		name: 'Film Board',
		year: '2019',
		description: 'A modern & beautiful site for the Film Board at Michigan Tech.',
		technologies: ['React', 'JavaScript', 'Next.js'],
	},
	{
		image: {
			src: tuyapiLogoImg,
			alt: 'TuyAPI logo',
		},
		name: 'TuyAPI',
		year: '2017 → present',
		description: 'A collection of projects that enable local control of thousands of low-cost IoT devices.',
		technologies: ['Typescript', 'JavaScript'],
	},
];

interface HomePageProps {
	posts: Array<{
		slug: string;
		title: string;
		publishedAt: string;
	}>;
}

export default function Home({posts}: HomePageProps) {
	const isFirstLoad = useFirstLoad();

	return (
		<div className={styles.container}>
			<Title label="Hi, I'm Max."/>

			<div style={{marginTop: '1rem'}}>
				<SocialButtons/>
			</div>

			<div>
				<p>
					I recently graduated from <TextLink href="https://mtu.edu">Michigan Tech</TextLink> (majored in CS and minored in math).
				</p>

				<p>
					I&apos;m currently building an API to the physical world at <TextLink href="https://www.getseam.com/">Seam</TextLink>.
				</p>

				<h2 className={styles.marginForSectionTop}>a few things I&apos;ve written</h2>

				<ul className={styles.blogPostList}>
					{posts.map(post => (
						<li key={post.slug}>
							<span className={styles.postPublishedAt}>{post.publishedAt}</span>
							<TextLink href={`/posts/${post.slug}`}>{post.title}</TextLink>
						</li>
					))}
				</ul>

				<h2 className={styles.marginForSectionTop}>a few things I&apos;ve worked on</h2>

				<p>
					I like to keep busy with side projects. My rule of thumb when starting a new project is to learn at least one thing, whether that&apos;s a framework, technology, language, or dev-ops methodology.
				</p>
			</div>

			<div className={`${styles.projectTiles} ${isFirstLoad ? styles.projectTilesAnimate : ''}`}>
				{
					PROJECTS.map(project => (
						<div key={project.name}>
							<ProjectTile image={project.image} video={project.video} name={project.name} year={project.year} description={project.description} technologies={project.technologies} isVideoShadowed={project.isVideoShadowed ?? false} isImageAlignedWithBottom={project.isImageAlignedWithBottom ?? false} isVideoRounded={project.isVideoRounded}/>
						</div>
					))
				}
			</div>

			<h2 className={styles.marginForSectionTop}>want to talk?</h2>

			<p>
				Feel free to email me if you have feedback on something, you&apos;re looking for a developer, or you just want to connect: <TextLink href="mailto:hi@maxisom.me">hi@maxisom.me</TextLink>. You might also want to check out my <TextLink href="/resume.pdf">résumé</TextLink>.
			</p>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = getPosts();

	return {
		props: {
			posts: posts.map(p => ({
				slug: p!.slug,
				title: p!.data.title as string,
				publishedAt: DateTime.fromJSDate(p!.data.date).plus({hours: 12}).toLocaleString({month: 'long', day: 'numeric', year: 'numeric'}),
			})),
		},
	};
};
