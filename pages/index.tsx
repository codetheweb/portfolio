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
			<Title label="Hi, I'm Max."/>

			<div style={{marginTop: '1rem'}}>
				<SocialButtons/>
			</div>

			<div>
				<p>
					I&apos;m currently building an API to the physical world at <TextLink href="https://www.getseam.com/">Seam</TextLink>.
				</p>

				<h2 className={styles.marginForSectionTop}>A few things I&apos;ve written</h2>

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

				<h2 className={styles.marginForSectionTop}>A few things I&apos;ve worked on</h2>

				<p>
					I like to keep busy with side projects. My rule of thumb when starting a new project is to learn at least one thing, whether that&apos;s a framework, technology, language, or dev-ops methodology.
				</p>
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

			<h2 className={styles.marginForSectionTop}>Want to talk?</h2>

			<p>
				Feel free to email me if you have feedback on something, you&apos;re looking for a developer, or you just want to connect: <TextLink href="mailto:hi@maxisom.me">hi@maxisom.me</TextLink>. You might also want to check out my <TextLink href="/resume.pdf">résumé</TextLink>.
			</p>
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
