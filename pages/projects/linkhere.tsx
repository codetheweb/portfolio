import React from 'react';
import Header from '../../components/header';
import Links from '../../components/projects/links';
import TextLink from '../../components/text-link';
import EmbeddedImg from '../../components/embedded-img';
import Footer from '../../components/projects/footer';
import commonStyles from './styles/common.module.scss';

export default function LinkHere() {
	return (
		<div>
			<div className={commonStyles.textSection}>
				<Header size="h1">linkhere</Header>

				<Links year="2020" github="https://github.com/link-here/extension" chrome="https://chrome.google.com/webstore/detail/linkhere/menbmobndejfbajdplodpfojcanodobh" firefox="https://addons.mozilla.org/en-US/firefox/addon/link_here/"/>

				<EmbeddedImg rounded size="large" src="/linkhere/demo.gif"/>

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
	);
}
