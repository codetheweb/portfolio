import React from 'react';
import Header from '../../components/header';
import Links from '../../components/projects/links';
import TextLink from '../../components/text-link';
import Footer from '../../components/projects/footer';
import commonStyles from './styles/common.module.scss';
import styles from './styles/tuyapi.module.scss';
import GitHubStats from '../../components/projects/github-stats';

export default function LinkHere() {
	return (
		<div>
			<div className={commonStyles.textSection}>
				<Header size="h1">TuyAPI</Header>

				<Links year="2017 → present" github="https://github.com/TuyaAPI" website="https://github.com/codetheweb/tuyapi"/>

				<div className={styles.githubStats}>
					<GitHubStats stars={900} issues={265} contributors={14} commits={500} installs="100k"/>
				</div>

				<p>
					TuyAPI was my first major, published entry into the world of open source. It&apos;s a collection of packages that enable the control of thousands of cheap IoT devices. Smart plugs, robot vaccums, and washing machines - TuyAPI can control them all. Although other projects exist that allow you to flash custom firmware on Tuya devices, TuyAPI implements a reverse-engineered version of the manufacturer&apos;s protocol.
				</p>

				<p>
					I originally created TuyAPI to allow <TextLink href="https://homebridge.io/">Homebridge</TextLink> to control smart plugs, and decided to open-source it so other people could use it too. It&apos;s now by far my most popular project
				</p>

				<p>
					Although I learned a lot about TCP protocols, encryption, and Node.js; probably the most benifical aspect for me was the immense amount of collaboration. I learned first-hand what it was like to be an open source maintainer, with all the highs and lows that come with that.
				</p>

				<p>
					There hasn&apos;t been much new development on TuyAPI for a while since the project is now fairly stable, but I still spend a decent amount of time every week replying to support-related <TextLink href="https://github.com/codetheweb/tuyapi/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">issues</TextLink>.
				</p>
			</div>

			<Footer/>
		</div>
	);
}
