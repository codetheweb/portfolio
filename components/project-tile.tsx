import React, {useMemo, useRef, useState} from 'react';
import Image, {ImageProps} from 'next/image';
import Link from 'next/link';
import {ChevronRight} from 'react-feather';
import {Except} from 'type-fest';
import useColorMode from '../lib/use-color-mode';
import styles from './styles/project-tile.module.scss';
import NoSsr from './no-ssr';

type ExtendedImageProps = ImageProps & {
	hasPriority?: boolean;
};

type ImageOptions = ExtendedImageProps & {
	dark?: Except<ExtendedImageProps, 'alt'>;
};

export type ProjectTileProps = {
	slug: string;
	image?: ImageOptions;
	video?: string | {
		light: string;
		dark: string;
	};
	isVideoShadowed?: boolean;
	isImageAlignedWithBottom?: boolean;
	name: string;
	year: string;
	description: string;
	technologies: string[];
	isVideoRounded?: boolean;
};

export default function ProjectTile({image, video, isVideoShadowed: shouldVideoHaveShadow = false, isImageAlignedWithBottom: alignImageWithBottom = false, name, year, description, technologies, isVideoRounded: roundedVideo = false, slug}: ProjectTileProps) {
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

	const imageToUse = useMemo<ExtendedImageProps | undefined>(() => {
		if (!image) {
			return image;
		}

		if (typeof image.dark !== 'undefined' && colorMode === 'dark') {
			return {
				...image.dark,
				alt: image.alt,
			};
		}

		return image;
	}, [colorMode, image]);

	const videoSrc = useMemo(() => {
		if (video && colorMode) {
			if (typeof video === 'string') {
				return video;
			}

			return video[colorMode];
		}
	}, [colorMode, video]);

	const inner = (
		<>
			<div className={styles.imageContainer} style={{paddingBottom: alignImageWithBottom ? 0 : '1rem'}}>

				{
					imageToUse && (
						<div
							className={styles.imageWrapper}
							style={{opacity: videoIsPlaying ? 0 : 1, marginTop: alignImageWithBottom ? 'auto' : '0'}}
						>
							<NoSsr when={Boolean(image?.dark)}>
								<Image
									fill
									src={imageToUse.src}
									alt={imageToUse.alt}
									sizes="256px"
									style={{objectFit: 'contain'}}
									priority={imageToUse.hasPriority}
									placeholder={typeof image?.dark === 'undefined' ? 'blur' : undefined}/>

							</NoSsr>
						</div>
					)
				}

				<NoSsr>
					{videoSrc && <div className={`${styles.videoContainer} ${roundedVideo ? styles.roundedVideo : ''} ${shouldVideoHaveShadow ? styles.withShadow : ''}`} style={{opacity: videoIsPlaying || !imageToUse ? 1 : 0}}><video ref={videoRef} muted loop playsInline src={`${videoSrc}#t=0.001`} preload="auto"/></div>}
				</NoSsr>
			</div>

			<div className={styles.details}>
				<div className={styles.nameAndYear}>
					<h3>{name} <ChevronRight className={styles.arrow}/></h3>

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
		</>
	);

	if (slug.startsWith('http')) {
		return (
			<a href={slug} target="_blank" className={styles.container} rel="noreferrer" onMouseEnter={playVideoPreview} onMouseLeave={resetVideoPreview}>
				{inner}
			</a>
		);
	}

	return (
		<Link href={slug} className={styles.container} onMouseEnter={playVideoPreview} onMouseLeave={resetVideoPreview}>
			{inner}
		</Link>
	);
}
