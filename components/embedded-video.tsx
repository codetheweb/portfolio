import React, {CSSProperties, RefObject, useEffect, useRef, useState} from 'react';
import {faVolumeMute, faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './styles/embedded-video.module.scss';

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

	useEffect(() => {
		if (syncWith?.current) {
			const current = syncWith.current;

			// Handle race condition
			if (!current.paused) {
				thisVideo.current?.play();
			}

			const onPlay = () => {
				thisVideo.current?.play();
			};

			const onPause = () => {
				thisVideo.current?.pause();
			};

			const onVolumeChange = () => {
				if (thisVideo.current) {
					thisVideo.current.volume = current?.volume ?? 0;
				}
			};

			const onSeeking = () => {
				if (thisVideo.current) {
					thisVideo.current.currentTime = current?.currentTime ?? 0;
				}
			};

			current.addEventListener('play', onPlay);
			current.addEventListener('pause', onPause);
			current.addEventListener('volumechange', onVolumeChange);
			current.addEventListener('seeking', onSeeking);

			const timerId = setInterval(() => {
				if (thisVideo.current?.readyState === 4) {
					thisVideo.current.currentTime = current.currentTime ?? 0;
				}
			}, 5000);

			return () => {
				current.removeEventListener('play', onPlay);
				current.removeEventListener('pause', onPlay);
				current.removeEventListener('volumechange', onPlay);
				current.removeEventListener('seeking', onPlay);

				clearInterval(timerId);
			};
		}
	}, [syncWith]);

	return (
		<div className={`${styles.container} ${wrapVertically ? styles.wrapVertically : ''} ${macOSStyle ? styles.macOS : ''}`} style={style}>
			<div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				paddingTop: `${(height / width) * 100}%`,
				height: 0,
				width: '100%'
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
				<button
					className={styles.unmuteButton}
					type="button"
					onClick={() => {
						setIsMuted(m => !m);
					}}
				>
					<FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp}/>
				</button>
			)}
		</div>
	);
});

export default EmbeddedVideo;
