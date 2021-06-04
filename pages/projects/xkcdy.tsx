import React from 'react';
import Header from '../../components/header';
import Links from '../../components/projects/links';
import TextLink from '../../components/text-link';
import EmbeddedImg from '../../components/embedded-img';
import Footer from '../../components/projects/footer';
import PhoneFramedVideo from '../../components/iphone-framed-video';
import commonStyles from './styles/common.module.scss';

export default function XKCDY() {
	return (
		<div>
			<div className={commonStyles.textSection}>
				<Header size="h1">XKCDY</Header>

				<Links year="2020" website="https://xkcdy.com" apple="https://apps.apple.com/us/app/xkcdy/id1520259318" github="https://github.com/XKCDY/app"/>

				<EmbeddedImg size="small" src="/images/xkcdy/home.png" width={1443} height={2867}/>

				<p>
					In the summer of 2020, I decided to learn Swift & SwiftUI by making an app.

					I set the end goal as a fully-featured app for <TextLink href="https://xkcd.com">xkcd</TextLink>, since it seemed relatively small in scope (at the time) and the <TextLink href="https://apps.apple.com/us/app/xkcd-open-source/id995811425">previous open source xkcd app</TextLink> had issues that annoyed me whenever using it. (The previous app is no longer maintained; otherwise I would have contributed to it instead of creating a new one.)
				</p>

				<p>
					In addition to the app, I wrote a simple backend API for it that automatically scrapes xkcd to retrieve comics and notifies users when a new comic is available. I planned to write the API in Swift using <TextLink href="https://vapor.codes/">Vapor</TextLink>, but had to switch to Typescript due to poor performance with the default database driver.
				</p>
			</div>

			<Header size="h2">Design</Header>

			<div className={commonStyles.textSection}>
				<EmbeddedImg size="medium" src="/images/xkcdy/ipad.png" width={1909} height={2630}/>

				<p>
					When designing the app, I tried to keep UX principles in mind. For example, the main actions for most screens are located at the bottom; where it&apos;s easiest to reach with your thumbs. On bigger screens, like iPads, the button bars automatically resize to provide a better experience. Since this was a side project and I had no deadline, I always prioritized polishing exising functionality to perfection instead of adding new functionality.
				</p>

				<p>
					I choose a waterfall layout for the main view instead of having a list (like a few other xkcd apps do) as it&apos;s more enjoyable to use when casually browsing. The app makes heavy use of gestures: the waterfall view is scrollable, action sheets and comics are dismisable by swiping, and comics can be zoomed by double-tapping.
				</p>

				<p>
					I made the intentional decision to integrate XKCDY with iOS-specific features as much as possible. As a result, the app supports:

					<ul>
						<li>3 different homescreen widgets (introduced in iOS 14)</li>
						<li>Custom automations via the built-in Shortcuts.app</li>
						<li><TextLink href="https://apps.apple.com/us/app/opener-open-links-in-apps/id989565871">Opener</TextLink>, a popular way to open native apps from the web browser</li>
					</ul>
				</p>
			</div>

			<Header size="h2">Problems Encountered</Header>
			<div className={commonStyles.textSection}>
				<div style={{float: 'right'}}>
					<PhoneFramedVideo src="/xkcdy/swipe.mp4"/>
				</div>

				<p>
					After learning the basics of Swift and SwiftUI, the single hardest part was getting the transition between the waterfall layout and the swipable detail view just right.
				</p>

				<p>
					I tried to model the transition after Photos.app. Although SwiftUI 2.0 in iOS 14 introduced some new features that would have made this much easier, I had to make this transition from scratch. Syncing the position with the finger position, the comic position, and the waterfall layout (and for every orientation) was difficult but the end result works well.
				</p>

				<Header topMargin size="h2">Results</Header>

				<p>
					After going through a long App Store review process, XKCDY finally became available in August. I made a few posts about it, but by far the most traffic-generating post was a <TextLink href="https://www.reddit.com/r/apple/comments/iislhi/i_just_released_a_modern_open_source_and_free/">submission to /r/apple</TextLink>.
				</p>

				<p>
					Today, XKCDY has close to 4k downloads and generally favorable reviews. I&apos;m very happy with how it turned out, and hope to do more iOS apps in the future.
				</p>
			</div>

			<Footer/>
		</div>
	);
}
