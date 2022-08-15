import {Play, Repeat} from 'react-feather';
import classNames from 'classnames';
import React, {DetailedHTMLProps, SourceHTMLAttributes, useRef, useState} from 'react';
import {SetRequired} from 'type-fest';
import useSyncedVideos from '../lib/use-synced-videos';
import Button from './button';
import styles from './styles/video-comparision.module.scss';

type SourceProps = DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;

type SourceWithRequiredProps = SourceProps & SetRequired<SourceProps, 'src' | 'type'>;

type VideoComparisionProps = {
	src1: SourceWithRequiredProps | SourceWithRequiredProps[];
	src2: SourceWithRequiredProps | SourceWithRequiredProps[];
};

const VideoComparision = (props: VideoComparisionProps) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

	const video1Ref = useRef<HTMLVideoElement>(null);
	const video2Ref = useRef<HTMLVideoElement>(null);
	useSyncedVideos(video1Ref, video2Ref);

	// Normalize
	const src1 = Array.isArray(props.src1) ? props.src1 : [props.src1];
	const src2 = Array.isArray(props.src2) ? props.src2 : [props.src2];

	const handleStart = async () => {
		await video1Ref.current?.play();
		setIsPlaying(true);
	};

	const handleEnd = () => {
		setHasPlayedOnce(true);
		setIsPlaying(false);
	};

	return (
		<div className={classNames(styles.container, isPlaying ? styles.playing : false)}>
			<video
				ref={video1Ref}
				playsInline
				onEnded={handleEnd}
			>
				{
					src1.map(src => (
						<source key={`${src.src}${src.type}`} {...src}/>
					))
				}
			</video>

			<video
				ref={video2Ref}
				playsInline
			>
				{
					src2.map(src => (
						<source key={`${src.src}${src.type}`} {...src}/>
					))
				}
			</video>

			<div className={styles.startWrapper}>
				<Button onClick={handleStart}>
					{hasPlayedOnce ? <Repeat/> : <Play/>}
				</Button>
			</div>
		</div>
	);
};

export default VideoComparision;
