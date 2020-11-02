import React from 'react';
import {motion} from 'framer-motion';
import Title from '../components/title';
import ProjectTile from '../components/project-tile';
import XKCDYHero from '../images/xkcdy/hero.png';
import LinkHerePlaceholder from '../images/linkhere/placeholder.png';
import FilmBoardHero from '../images/filmboard/hero.png';
import MuseLogo from '../images/muse/logo.png';
import TuyAPILogo from '../images/tuyapi/logo.png';
import styles from './styles/index.module.scss';
import SocialButtons from '../components/social-buttons';
import TextLink from '../components/text-link';

const PROJECTS = [
	{
		video: '/xkcdy/promo.mp4',
		shouldVideoHaveShadow: true,
		alignImageWithBottom: true,
		image: XKCDYHero,
		name: 'XKCDY',
		year: '2020',
		description: 'A modern, open source iOS client for XKCD.',
		technologies: ['Swift', 'SwiftUI', 'Typescript']
	},
	{
		image: LinkHerePlaceholder,
		name: 'linkhere',
		year: '2020',
		description: 'A simple web extension that unobtrusively shows websites saved from your mobile device in new tabs.',
		technologies: ['React', 'Typescript']
	},
	{
		image: MuseLogo,
		name: 'Muse',
		year: '2020',
		description: 'A self-hosted midwestern Discord music bot that doesn\'t suck.',
		technologies: ['Typescript', 'Discord.js']
	},
	{
		video: '/filmboard/promo.mp4',
		image: FilmBoardHero,
		name: 'Film Board',
		year: '2019',
		description: 'A modern & beautiful site for the Film Board at Michigan Tech.',
		technologies: ['React', 'JavaScript', 'Next.js']
	},
	{
		image: TuyAPILogo,
		name: 'TuyAPI',
		year: '2017 → present',
		description: 'A collection of projects that enable local control of thousands of low-cost IoT devices.',
		technologies: ['Typescript', 'JavaScript']
	}
];

const APPEAR = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1
	}
};

export default function Home() {
	return (
		<div>
			<Title label="Hi, I'm Max."/>
			<SocialButtons/>

			<div>
				<p>
					I&apos;m currently a third-year CS student at <TextLink href="https://mtu.edu">Michigan Tech</TextLink>.
				</p>

				<h2>A few things I&apos;ve worked on recently</h2>

				<p>
					I like to keep busy with side projects. My rule of thumb when starting a new project is to learn at least one thing; whether that&apos;s a framework, technology, language, or dev-ops methodology.
				</p>
			</div>

			<motion.div className={styles.projectTiles} variants={{show: {transition: {staggerChildren: 0.2, delayChildren: 0}}}} initial="hidden" animate="show">
				{
					PROJECTS.map(project => (
						<motion.div key={project.name} variants={APPEAR} transition={{duration: 0.8}}>
							<ProjectTile image={project.image} video={project.video} name={project.name} year={project.year} description={project.description} technologies={project.technologies} shouldVideoHaveShadow={project.shouldVideoHaveShadow ?? false} alignImageWithBottom={project.alignImageWithBottom ?? false}/>
						</motion.div>
					))
				}
			</motion.div>

			<h2>Want to talk?</h2>

			<p>
				Feel free to email me if you have feedback on one of my projects, you&apos;re looking for a developer, or you just want to connect: <TextLink href="mailto:hi@maxisom.me">hi@maxisom.me</TextLink>. You might also want to check out my <TextLink href="/resume.pdf">résumé</TextLink>.
			</p>
		</div>
	);
}
