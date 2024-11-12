import React from 'react';
import {NextSeo} from 'next-seo';
import Header from '../../components/header';
import Links from '../../components/projects/links';
import TextLink from '../../components/text-link';
import Footer from '../../components/projects/footer';
import MuseHero from '../../public/images/muse/hero.png';
import EmbeddedImg from '../../components/embedded-img';
import commonStyles from './styles/common.module.scss';

export default function Muse() {
	return (
		<>
			<NextSeo title="Muse | Max Isom"/>

			<div className={commonStyles.largerContainer}>
				<div className={commonStyles.textSection}>
					<Header size="h1">Muse</Header>

					<Links year="2020" github="https://github.com/museofficial/muse"/>

					<EmbeddedImg hasPriority src={MuseHero} size="medium" alt="Muse README image"/>

					<p>
						Muse is a self-hosted music bot for <TextLink href="https://discord.com/">Discord</TextLink>. It can connect to voice channels, play audio from most YouTube videos, and auto-convert Spotify playlists/tracks to YouTube videos.

						In the words of the README:
					</p>
					<blockquote>
						Muse is a highly-opinionated midwestern self-hosted Discord music bot that <b>doesn&apos;t suck</b>. It&apos;s made for small to medium-sized Discord servers/guilds (think about a group the size of you, your friends, and your friend&apos;s friends).
					</blockquote>

					<p>
						Other self-hosted music bots exist; but they were either too complex, over-engineered, or were <TextLink href="https://github.com/jagrosh/MusicBot/issues/258">missing Spotify support</TextLink> (and none were midwestern). Muse was built to fill the gap between extremely basic bots and bots made for much larger Discord servers.
					</p>

					<p>
						In August 2024, I decided to transfer ownership as the user base had steadily grown and I no longer had the time to maintain it to the level of quality I wanted. It&apos;s now maintained by several contributors.
					</p>

					<p>
						As of November 2024, the Docker image for Muse receives about 15k downloads per version.
					</p>
				</div>

				<Header size="h3">Testimonials</Header>
				<blockquote>
					it works.
				</blockquote>
				- nickw

				<blockquote>
					this is the way comrade
				</blockquote>
				- The_Administrator

				<Footer/>
			</div>
		</>
	);
}
