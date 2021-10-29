import {RefObject, useEffect} from 'react';

const useSyncedVideos = (main?: RefObject<HTMLVideoElement>, synced?: RefObject<HTMLVideoElement>) => {
	useEffect(() => {
		if (synced?.current && main?.current) {
			const mainRef = main.current;

			// Handle race condition
			if (!mainRef.paused) {
				void synced.current.play();
			}

			const onPlay = () => {
				synced.current?.play();
			};

			const onPause = () => {
				synced.current?.pause();
			};

			const onVolumeChange = () => {
				if (synced.current) {
					synced.current.volume = mainRef.volume ?? 0;
				}
			};

			const onSeeking = () => {
				if (synced.current) {
					synced.current.currentTime = mainRef.currentTime ?? 0;
				}
			};

			mainRef.addEventListener('play', onPlay);
			mainRef.addEventListener('pause', onPause);
			mainRef.addEventListener('volumechange', onVolumeChange);
			mainRef.addEventListener('seeking', onSeeking);

			const timerId = setInterval(() => {
				if (mainRef.readyState === 4 && synced.current) {
					synced.current.currentTime = mainRef.currentTime ?? 0;
				}
			}, 5000);

			return () => {
				mainRef.removeEventListener('play', onPlay);
				mainRef.removeEventListener('pause', onPlay);
				mainRef.removeEventListener('volumechange', onPlay);
				mainRef.removeEventListener('seeking', onPlay);

				clearInterval(timerId);
			};
		}
	}, [main, synced]);
};

export default useSyncedVideos;
