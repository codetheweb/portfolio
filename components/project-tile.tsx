import React, {useRef, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import styles from './styles/project-tile.module.scss';

export type ProjectTileProps = {
	image?: {
		src: string;
		width: number;
		height: number;
		hasPriority?: boolean;
	};
	video?: string;
	isVideoShadowed?: boolean;
	isImageAlignedWithBottom?: boolean;
	name: string;
	year: string;
	description: string;
	technologies: string[];
	isVideoRounded?: boolean;
};

export default function ProjectTile({image, video, isVideoShadowed: shouldVideoHaveShadow = false, isImageAlignedWithBottom: alignImageWithBottom = false, name, year, description, technologies, isVideoRounded: roundedVideo = false}: ProjectTileProps) {
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
		<Link href={`/projects/${name.toLowerCase().split(' ').join('')}`}>
			<a className={styles.container} onMouseEnter={playVideoPreview} onMouseLeave={resetVideoPreview}>
				<div className={styles.imageContainer} style={{paddingBottom: alignImageWithBottom ? 0 : '1rem'}}>

					{
						image && (
							<div className={styles.imageWrapper} style={{opacity: videoIsPlaying ? 0 : 1, marginTop: alignImageWithBottom ? 'auto' : '0'}}>
								<Image src={image.src} layout="fill" objectFit="contain" priority={image.hasPriority}/>
							</div>
						)
					}

					{video && <div className={`${styles.videoContainer} ${roundedVideo ? styles.roundedVideo : ''} ${shouldVideoHaveShadow ? styles.withShadow : ''}`} style={{opacity: videoIsPlaying || !image ? 1 : 0}}><video ref={videoRef} muted loop src={`${video}#t=0.001`} preload="auto"/></div>}
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
