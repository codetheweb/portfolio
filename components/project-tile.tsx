import React, {useMemo, useRef, useState} from 'react';
import Image, {ImageProps} from 'next/image';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import useColorMode from '../lib/use-color-mode';
import styles from './styles/project-tile.module.scss';

type ExtendedImageProps = ImageProps & {
	hasPriority?: boolean;
};

type ImageOptions = ExtendedImageProps & {
	dark?: ExtendedImageProps;
};

export type ProjectTileProps = {
	image?: ImageOptions;
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

	const {colorMode} = useColorMode();

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

	const imageToUse = useMemo(() => {
		if (!image) {
			return image;
		}

		if (colorMode === 'dark' && typeof image.dark !== 'undefined') {
			return image.dark;
		}

		return image;
	}, [colorMode, image]);

	return (
		<Link href={`/projects/${name.toLowerCase().split(' ').join('-')}`}>
			<a className={styles.container} onMouseEnter={playVideoPreview} onMouseLeave={resetVideoPreview}>
				<div className={styles.imageContainer} style={{paddingBottom: alignImageWithBottom ? 0 : '1rem'}}>

					{
						imageToUse && (
							<div
								className={styles.imageWrapper}
								style={{opacity: videoIsPlaying ? 0 : 1, marginTop: alignImageWithBottom ? 'auto' : '0'}}
							>
								<Image
									src={imageToUse.src as StaticImageData}
									layout="fill"
									sizes="512px"
									objectFit="contain"
									priority={imageToUse.hasPriority}
									placeholder="blur"/>
							</div>
						)
					}

					{video && <div className={`${styles.videoContainer} ${roundedVideo ? styles.roundedVideo : ''} ${shouldVideoHaveShadow ? styles.withShadow : ''}`} style={{opacity: videoIsPlaying || !imageToUse ? 1 : 0}}><video ref={videoRef} muted loop src={`${video}#t=0.001`} preload="auto"/></div>}
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
