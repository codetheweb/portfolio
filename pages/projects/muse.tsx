import React from 'react';
import {NextSeo} from 'next-seo';
import Header from '../../components/header';
import Links from '../../components/projects/links';
import EmbeddedVideo from '../../components/embedded-video';
import TextLink from '../../components/text-link';
import Footer from '../../components/projects/footer';
import commonStyles from './styles/common.module.scss';

export default function Muse() {
	return (
		<div>
			<NextSeo title="Muse | Max Isom"/>

			<div className={commonStyles.textSection}>
				<Header size="h1">Muse</Header>

				<Links year="2020" github="https://github.com/codetheweb/muse"/>

				<EmbeddedVideo src="/muse/demos/youtube.mp4"/>

				<p>
					Muse is a self-hosted music bot for <TextLink href="https://discord.com/">Discord</TextLink>. It can connect to voice channels and play audio from most YouTube videos.

					In the words of the README:

					<blockquote>
						Muse is a highly-opinionated midwestern self-hosted Discord music bot that doesn&apos;t suck. It&apos;s made for small to medium-sized Discord servers/guilds (think about a group the size of you, your friends, and your friend&apos;s friends).
					</blockquote>
				</p>

				<p>
					Other self-hosted music bots exist; but they were either too complex, over-engineered, or were <TextLink href="https://github.com/jagrosh/MusicBot/issues/258">missing Spotify support</TextLink> (and none were midwestern). Muse was built to fill the gap between extremely basic bots and bots made for much larger Discord servers.
				</p>

				<p>
					Muse was also my first exposure to inversion of control (IoC) using <TextLink href="http://inversify.io/">InversifyJS</TextLink>.
				</p>
			</div>

			<Header size="h2">Functionality</Header>
			<div className={commonStyles.textSection}>
				<p>
					Muse supports all the expected commands like play, skip, seek, queue, etc. It can also auto-translate Spotify artists / albums / playlists / songs to equivalent tracks from YouTube:

					<EmbeddedVideo wrapVertically src="/muse/demos/spotify.mp4"/>
				</p>

				<p>
					There&apos;s a few easter eggs:

					<EmbeddedVideo wrapVertically src="/muse/demos/packers.mp4"/>
				</p>
			</div>

			<Header size="h2">Results</Header>
			<div className={commonStyles.textSection} style={{marginBottom: '1rem'}}>
				<p>
					Muse has been in use for the last few months and it&apos;s been working great. We&apos;ve discovered a few minor bugs, but all were easily fixed. The highly-modular architecture also makes it easy to add new functionality in the future if necessary.
				</p>
			</div>

			<Header size="h3">Testimonials</Header>
			<div className={commonStyles.textSection}>
				<blockquote>
					it works.
				</blockquote>
				- nickw

				<blockquote>
					this is the way comrade
				</blockquote>
				- The_Administrator
			</div>

			<Footer/>
		</div>
	);
}
