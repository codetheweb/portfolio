import React from 'react';
import {NextSeo} from 'next-seo';
import Header from '../../components/header';
import Links from '../../components/projects/links';
import EmbeddedImg from '../../components/embedded-img';
import Footer from '../../components/projects/footer';
import commonStyles from './styles/common.module.scss';
import demoGif from '/public/images/linkhere/demo.gif';

export default function LinkHere() {
	return (
		<>
			<NextSeo title="linkhere | Max Isom"/>

			<div className={commonStyles.largerContainer}>
				<div className={commonStyles.textSection}>
					<Header size="h1">linkhere</Header>

					<Links year="2020" github="https://github.com/link-here/extension" chrome="https://chrome.google.com/webstore/detail/linkhere/menbmobndejfbajdplodpfojcanodobh" firefox="https://addons.mozilla.org/en-US/firefox/addon/link_here/"/>

					<EmbeddedImg hasPriority size="large" src={demoGif} placeholder="empty"/>

					<p>
						linkhere was built to solve a real-world problem. I often find an interesting article or website when browsing on my phone, but would rather read it / research it further later on a larger screen. Although there are some services like Pocket that do something similar, linkhere is unique in how it presents saved sites. They are displayed in grayscale every time a new tab is opened, providing a gentle nudge to open them while not being overly aggressive.
					</p>

					<p>
						linkhere is comprised of 3 parts: a browser extension, a server, and a share shortcut on iOS.
					</p>

					<p>
						I&apos;ve used linkhere daily since I made it over a weekend. It&apos;s been extremely stable, with no bugfixes or other updates needed.
					</p>
				</div>

				<Footer/>
			</div>
		</>
	);
}
