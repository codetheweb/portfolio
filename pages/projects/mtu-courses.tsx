import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {NextSeo} from 'next-seo';
import classNames from 'classnames';
import Header from '../../components/header';
import Links from '../../components/projects/links';
import ScrollIndicator from '../../components/scroll-indicator';
import TextLink from '../../components/text-link';

import UltrawideDemoImg from '../../public/images/courses/ultrawide-demo.png';
import DDoSImg from '../../public/images/courses/ddos.png';
import Footer from '../../components/projects/footer';
import VideoComparision from '../../components/video-comparision';
import styles from './styles/mtu-courses.module.scss';
import commonStyles from './styles/common.module.scss';

const CoursesPage = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [didVideoStart, setDidVideoStart] = useState(false);

	useEffect(() => {
		// Do this instead of autoPlay
		// because onPlay won't fire if
		// video loads too quickly (is cached).
		// Not sure if this is a bug with Preact
		// or if this is intended behavior.
		videoRef.current?.play().then(() => {
			setDidVideoStart(true);
		});
	}, []);

	return (
		<>
			<NextSeo
				title="MTU Courses | Max Isom"
				description="Find courses. Plan your semester."/>

			<div ref={containerRef} className={classNames(styles.videoContainer, didVideoStart ? styles.videoHasStarted : false)}>
				<div className={styles.overlayText}>
					<h3>Michigan Tech</h3>
					<h3>Courses</h3>
				</div>

				<div className={styles.innerVideoContainer}>
					<video
						ref={videoRef}
						muted
						playsInline
						preload="metadata"
						className={styles.heroVideo}
					>
						<source src="/videos/courses/hero/hero.mov" type="video/quicktime"/>
						<source src="/videos/courses/hero/hero.webm" type="video/webm"/>
					</video>
				</div>
			</div>

			<ScrollIndicator className={classNames(styles.scrollIndicator, didVideoStart ? styles.videoHasStarted : false)}/>

			<Links
				areVertical
				year="2021"
				github="https://github.com/Michigan-Tech-Courses"
				website="https://michigantechcourses.com/"
				className={styles.links}/>

			<Header size="h2">Background</Header>
			<div className={commonStyles.textSection}>
				<p>
					In early 2020 I and a few other students worked on <TextLink href="https://github.com/Kiro47/MTU-Transfer-Course-Gatherer">a website</TextLink> that allowed you to easily see courses that are pre-approved for transfer to Michigan Tech since it&apos;s a real pain to find them manually. We originally planned to add support for showing Tech-offered courses to the same tool, but not everyone was available.
				</p>

				<p>I ended up building it as a separate project over the next few months. I planned to release it in two parts: first a MVP and then a more feature-rich application.</p>

				<p>I launched the initial version in March of 2021. Even though it was fairly basic, the tool still <TextLink href="https://www.reddit.com/r/MTU/comments/lygw7x/launch_of_michigantechcoursescom/">received a very positive reception</TextLink>.</p>

				<p>I launched the feature-rich v2 seven months later, again to a <TextLink href="https://www.reddit.com/r/MTU/comments/qa2die/v2_launch_of_michigantechcoursescom/">very positive reception</TextLink>.</p>
			</div>

			<Header size="h2">Design</Header>

			<div className={commonStyles.textSection} style={{marginBottom: '1rem'}}>
				<p>Inspired by tools like Spotlight, Alfred, Raycast, and even GitHub Issues, the primary interface to finding courses is a free-form search field. You can enter keywords, and then narrow your search by using filters of the form <code>token:value</code>. For example, <code>intro subject:cs</code> might return Intro to Programming.</p>

				<p>The app&#39;s UI is primarily designed around reducing the number of clicks required for any particular action. Just compare how long it takes to view a course description on my app vs. Banweb (Tech&#39;s course system):</p>
			</div>

			<VideoComparision
				src1={{
					src: '/videos/courses/banweb.mov#t=0.1',
					type: 'video/mp4',
				}} src2={{
					src: '/videos/courses/app.mov#t=0.1',
					type: 'video/mp4',
				}}/>

			<p style={{marginTop: '2rem'}}>Since this is a mostly STEM school, many students have wide and/or 4k monitors. I wanted to improve the workflow if extra screen space was available, so there&apos;s a 2-column layout that&#39;s activated when the browser window is wide enough:</p>

			<div style={{gridColumn: '1/4'}}>
				<Image src={UltrawideDemoImg} placeholder="blur" alt="demo on an ultrawide monitor" style={{maxWidth: '100%', height: 'auto'}}/>
			</div>

			<p>Because many users often don&apos;t keep their browser window fully expanded in day-to-day use, I also added a tip instructing users to resize their browser that appears if this 2-column layout is supported.</p>

			<Header size="h2">Features</Header>

			<div className={commonStyles.textSection}>
				<p>The main goal of this app was to provide both a smoother experience and additional features as compared to Banweb. For example, integrated statistics on pass, fail, drop, and class size data are shown for each course—something that Michigan Tech doesn&#39;t expose anywhere (information was retrieved through a <TextLink href="https://www.mtu.edu/foia/">FOIA request</TextLink>). Instructor ratings are also synced from Rate My Professors, so students can easily see if a course they&#39;re looking at has a particularly good or bad professor.</p>

				<p>Of course, the biggest additional value that my app provides are what I call &quot;baskets.&quot;</p>

				<p>Baskets allow you to save any number of courses to a table for reference. A few features include:</p>

				<ul>
					<li>Exporting the basket as an image or .csv file</li>
					<li>Generating an importable calendar</li>
					<li>Showing a realtime-preview of your schedule with monthly and weekly views</li>
					<li>Filtering by sections schedule-compatible with your basket with the <code>is:compatible</code> search filter</li>
					<li>Correctly handling edge cases, like warning you if a section was deleted from Banweb</li>
				</ul>
			</div>

			<Header size="h2">Problems Encountered</Header>

			<div className={commonStyles.textSection}>
				<p>I spent a few days looking at moving much of the core logic to Web Workers to keep the main UI thread responsive, but ultimately the complexity trade-off didn&#39;t seem worth it. After some experimentation, I was able to greatly reduce loading time and increase general responsiveness by moving expensive tasks into several <TextLink href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback">requestIdleCallback()</TextLink> calls, which allows for better utilization of the main single thread.</p>

				<p>As another example of an optimization necessary for this specific application, I moved from <TextLink href="https://gitlab.com/john.carroll.p/rschedule/-/issues/61">a more elegant comparison of schedules</TextLink> to <TextLink href="https://github.com/Michigan-Tech-Courses/frontend/blob/dev/src/lib/do-schedules-conflict.ts">more of a static analysis approach that makes a few assumptions</TextLink>, shaving several seconds off filtering sections by those schedule-compatible with the current basket.</p>

				<p>Besides performance issues, I opened <TextLink href="https://github.com/chakra-ui/chakra-ui/pull/4444">a PR</TextLink> and a <TextLink href="https://github.com/chakra-ui/chakra-ui/issues/3609">few</TextLink> <TextLink href="https://github.com/taskforcesh/bullmq/issues/414">issues</TextLink> with some of the open-source libraries I was using.</p>

				<p>I also managed to accidentally DDoS the school&#39;s course system during development of the scraper:</p>

				<Image src={DDoSImg} placeholder="blur" alt="oops" style={{maxWidth: '100%', height: 'auto'}}/>
			</div>

			<Header size="h2">Results</Header>

			<div className={commonStyles.textSection}>
				<p>As of November 2024 (3 years later), according to analytics around 80-90% of the student body actively uses Michigan Tech Courses.</p>

				<Footer/>
			</div>
		</>
	);
};

export default CoursesPage;
