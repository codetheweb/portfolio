import React, {CSSProperties, RefObject, useRef, useState} from 'react';
import {VolumeX, Volume2} from 'react-feather';
import useSyncedVideos from '../lib/use-synced-videos';
import styles from './styles/embedded-video.module.scss';
import Button from './button';

type Props = {
	src: string;
	width: number;
	height: number;
	wrapVertically?: boolean;
	macOSStyle?: boolean;
	autoPlay?: boolean;
	loop?: boolean;
	syncWith?: RefObject<HTMLVideoElement>;
	style?: CSSProperties;
};

const EmbeddedVideo = React.forwardRef<HTMLVideoElement, Props>(({
	src,
	width,
	height,
	wrapVertically = false,
	macOSStyle = false,
	autoPlay = false,
	loop = false,
	syncWith,
	style = {}}, ref) => {
	const [isMuted, setIsMuted] = useState(autoPlay);
	const thisVideo = useRef<HTMLVideoElement>(null);

	useSyncedVideos(syncWith, thisVideo);

	return (
		<div className={`${styles.container} ${wrapVertically ? styles.wrapVertically : ''} ${macOSStyle ? styles.macOS : ''}`} style={style}>
			<div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				paddingTop: `${(height / width) * 100}%`,
				height: 0,
				width: '100%',
				zIndex: -1,
			}}/>
			<video
				ref={ref ?? thisVideo}
				playsInline
				muted={syncWith ? true : isMuted}
				controls={syncWith ? false : !autoPlay}
				autoPlay={syncWith ? undefined : autoPlay}
				src={`${src}#t=0.001`}
				loop={syncWith ? undefined : loop}
				className={styles.video}/>

			{autoPlay && (
				<Button
					className={styles.unmuteButton}
					type="button"
					onClick={() => {
						setIsMuted(m => !m);
					}}
				>
					{isMuted ? <VolumeX/> : <Volume2/>}
				</Button>
			)}
		</div>
	);
});

export default EmbeddedVideo;
