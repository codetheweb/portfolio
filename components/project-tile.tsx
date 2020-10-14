import React, {useRef, useState} from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import styles from './styles/project-tile.module.scss';

export default function ProjectTile({image, video, shouldVideoHaveShadow = false, alignImageWithBottom = false, name, year, description, technologies}: {image?: any; video?: string; shouldVideoHaveShadow: boolean; alignImageWithBottom: boolean; name: string; year: string; description: string; technologies: string[]}) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [videoIsPlaying, setVideoIsPlaying] = useState(false);

	const playVideoPreview = async () => {
		if (videoRef.current) {
			setVideoIsPlaying(true);
			await videoRef.current?.play();
		}
	};

	const resetVideoPreview = async () => {
		setVideoIsPlaying(false);

		if (videoRef?.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.pause();
		}
	};

	return (
		<Link href={`/projects/${name.toLowerCase()}`}>
			<a className={styles.container} onMouseEnter={playVideoPreview} onMouseLeave={resetVideoPreview}>
				<div className={styles.imageContainer} style={{paddingBottom: alignImageWithBottom ? 0 : '1rem'}}>
					{image && <img src={image} style={{opacity: videoIsPlaying ? 0 : 1, marginTop: alignImageWithBottom ? 'auto' : '0'}}/>}

					{video && <div className={`${styles.videoContainer} ${shouldVideoHaveShadow ? styles.withShadow : ''}`} style={{opacity: videoIsPlaying ? 1 : 0}}><video ref={videoRef} muted loop src={video} preload="auto"/></div>}
				</div>

				<div className={styles.details}>
					<div className={styles.nameAndYear}>
						<h3>{name} <FontAwesomeIcon icon={faChevronRight} className={styles.arrow}/></h3>

						<span className={styles.year}>{year}</span>
					</div>

					<p>{description}</p>

					<div className={styles.tags}>
						{
							technologies.map(technology => (
								<div key={technology} className={styles.tag}>{technology}</div>
							))
						}
					</div>
				</div>
			</a>
		</Link>
	);
}
