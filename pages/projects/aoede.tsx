import React, {useRef} from 'react';
import Header from '../../components/header';
import Links from '../../components/projects/links';
import EmbeddedVideo from '../../components/embedded-video';
import TextLink from '../../components/text-link';
import Footer from '../../components/projects/footer';
import commonStyles from './styles/common.module.scss';

export default function Aoede() {
	const videoRef = useRef<HTMLVideoElement>(null);

	return (
		<div>
			<div className={commonStyles.textSection} style={{overflow: 'unset'}}>
				<Header size="h1">Aoede</Header>

				<Links year="2021" github="https://github.com/codetheweb/aoede"/>

				<blockquote>
					Aoede is a Discord music bot that directly streams from Spotify to Discord. The only interface is Spotify itself.
				</blockquote>

				<EmbeddedVideo ref={videoRef} macOSStyle autoPlay loop src="/aoede/demo/discord.mp4"/>
				<EmbeddedVideo macOSStyle src="/aoede/demo/spotify.mp4" syncWith={videoRef}/>

				<p>
					Aoede is a self-hosted music bot for <TextLink href="https://discord.com/">Discord</TextLink> that connects to your Spotify Premium account. If it sees you in a voice channel, Aoede will automatically enable Spotify Connect for itself and appear in your casting menu. If you start casting to Aoede, it&apos;ll connect to your voice channel and play the casted audio.
				</p>

				<p>
					<span>
						I started Aoede as a learning exercise for Rust since it&apos;s relatively small in scope (it ended up being ~600 lines of code). I&apos;ve come to appreciate many of Rust&apos;s features that contribute to making it most-loved language
					</span>

							&nbsp;
					<TextLink href="https://insights.stackoverflow.com/survey/2016#technology-most-loved-dreaded-and-wanted">for</TextLink>
							&nbsp;
					<TextLink href="https://insights.stackoverflow.com/survey/2017#most-loved-dreaded-and-wanted">the</TextLink>
							&nbsp;
					<TextLink href="https://insights.stackoverflow.com/survey/2018/#most-loved-dreaded-and-wanted">last</TextLink>
							&nbsp;
					<TextLink href="https://insights.stackoverflow.com/survey/2019#most-loved-dreaded-and-wanted">5</TextLink>
							&nbsp;
					<TextLink href="https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted">years</TextLink>
							&nbsp;

					<span>
						in a row; like the borrow checker and a first-class dependency manager.
					</span>
				</p>
			</div>

			<Header size="h2">Results</Header>
			<div className={commonStyles.textSection} style={{marginBottom: '1rem'}}>
				<p>
					Aoede received a warm reception on <TextLink href="https://www.reddit.com/r/Discord_Bots/comments/my8du4/aoede_self_hosted_spotify_discord_bot/">/r/Discord_Bots</TextLink>. I&apos;ve fixed a few bugs (most due to my intermediate-level knowledge of Rust) and it&apos;s been working great.
				</p>

				<p>
					I really enjoyed learning Rust and hope to use it in future projects.
				</p>
			</div>

			<Footer/>
		</div>
	);
}
