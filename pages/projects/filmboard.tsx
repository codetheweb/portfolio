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
				<Header size="h1">Film Board</Header>

				<Links year="2019" github="https://github.com/Film-Board/filmboard" website="https://filmboard.mtu.edu/"/>

				<EmbeddedImg size="medium" src="/filmboard/showtimes.png"/>

				<p>
					The Film Board at Michigan Tech is a club that shows weekly movies to campus and the wider community. I was looking for a project to expand my web development skills, and creating a non-trival website from scratch seemed like it&apos;d be a good start.
				</p>
			</div>

			<div className={commonStyles.textSection}>
				<EmbeddedImg size="medium" src="/filmboard/movies.png"/>
			</div>

			<Header size="h2">Development Process</Header>
			<div className={commonStyles.textSection}>
				<EmbeddedImg rounded padding size="medium" src="/filmboard/mockup.png"/>

				<p>
					I started by approaching them with a mockup of a possible redesign to see if they&apos;d be interested. They were, and after some initial discussion I started development. The entire process was client-driven; we met regularly to discuss progress and what needed to be changed. I tracked tasks using Trello.
				</p>

				<p>
					The goals were to both make the site look more modern while also adding new functionality. We ended up not going with the logo I designed due to branding concerns.
				</p>
			</div>

			<Header size="h2">Adding & Editing Media</Header>
			<div className={commonStyles.textSection}>
				<EmbeddedImg size="medium" src="/filmboard/edit-page.png"/>
				<p>
					I ended up making a simple CMS to add / edit / delete pages (they wanted something easy to use, since the old site used WordPress).
				</p>
			</div>

			<div className={commonStyles.textSection}>
				<EmbeddedImg size="medium" src="/filmboard/edit-movie.png"/>

				<p>
					Adding movies is supercharged on the new site. <TextLink href="https://www.youtube.com/watch?v=E2WV9h8Ulh8">As a comparision</TextLink>, adding the same movie on the WordPress site took ~180 seconds vs. ~45 on my redesign. I was able to accomplish this by auto-filling almost all the required fields (description, ratings, actors, poster, showtimes, etc.). The trailer is also now automatically downloaded and processed, something that wasn&apos;t possible before.
				</p>
			</div>

			<Header size="h2">Results</Header>
			<div className={commonStyles.textSection}>
				<p>
					I&apos;ve checked in at least once a month to make sure everything&apos;s running smoothly, and so far there haven&apos;t been any issues. I also preemptively update the youtube-dl dependency occasionally so trailer downloads don&apos;t break (I&apos;d like to have an automated process for this in the future).
				</p>
			</div>

			<Footer/>
		</div>
	);
}
