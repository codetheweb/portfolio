import React from 'react';
import dayjs from 'dayjs';
import {GetStaticProps} from 'next';
import Title from '../components/title';
import ProjectTile from '../components/project-tile';
import SocialButtons from '../components/social-buttons';
import TextLink from '../components/text-link';
import {useFirstLoad} from '../lib/first-load';
import {getPosts} from '../lib/get-posts';
import {PROJECTS_LIST} from '../lib/projects-list';
import styles from './styles/index.module.scss';

interface HomePageProps {
	posts: Array<{
		slug: string;
		title: string;
		publishedAt: string;
		tags: string[];
	}>;
}

export default function Home({posts}: HomePageProps) {
	const isFirstLoad = useFirstLoad();

	return (
		<div className={styles.container}>
			<Title label="hi, I'm Max."/>

			<div style={{marginTop: '1rem'}}>
				<SocialButtons/>
			</div>

			<div>
				<p>
					I&apos;m currently at <TextLink href="https://www.trychroma.com/">Chroma</TextLink>.
				</p>
				<p>
					Previously, I was at <TextLink href="https://www.getseam.com/">Seam</TextLink> building an API to the physical world.
				</p>

				<h2 className={styles.marginForSectionTop}>here&apos;s one thing I wrote...</h2>

				<ul className={styles.blogPostList}>
					{posts.map(post => (
						<li key={post.slug}>
							<div>
								<span className={styles.postPublishedAt}>{post.publishedAt}</span>
								<div className={styles.postTags}>
									{post.tags.slice(0, 3).map(tag => (
										<span key={tag} className={styles.postTag}>{tag}</span>
									))}
								</div>
							</div>

							<TextLink href={`/posts/${post.slug}`} className={styles.postTitle}>{post.title}</TextLink>
						</li>
					))}
				</ul>

				<h2 className={styles.marginForSectionTop}>...and a few things I&apos;ve worked on.</h2>
			</div>

			<div className={`${styles.projectTiles} ${isFirstLoad ? styles.projectTilesAnimate : ''}`}>
				{
					PROJECTS_LIST.map(project => (
						<div key={project.name}>
							<ProjectTile image={project.image} video={project.video} name={project.name} year={project.year} description={project.description} technologies={project.technologies} isVideoShadowed={project.isVideoShadowed ?? false} isImageAlignedWithBottom={project.isImageAlignedWithBottom ?? false} isVideoRounded={project.isVideoRounded} slug={project.slug}/>
						</div>
					))
				}
			</div>

			<h2 className={styles.marginForSectionTop}>want to talk?</h2>

			<ul>
				<li>
					<TextLink href="mailto:hi@maxisom.me">hi@maxisom.me</TextLink>
				</li>
				<li>
					<TextLink href="/resume.pdf">résumé</TextLink>
				</li>
			</ul>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getPosts();

	return {
		props: {
			posts: posts.map(p => ({
				slug: p.slug,
				title: p.meta.title,
				tags: p.meta.tags,
				publishedAt: dayjs(p.meta.date).format('MMMM D, YYYY'),
			})),
		},
	};
};
