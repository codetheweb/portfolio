import React from 'react';
import iPhoneFrame from '../public/iphone-frame.png';
import styles from './styles/iphone-framed-video.module.scss';

export default function PhoneFramedVideo({src}: {src: string}) {
	return (
		<div className={styles.container}>
			<div className={styles.videoContainer}>
				<div className={styles.background}/>
				<video loop muted autoPlay src={src}/>
			</div>
			<img src={iPhoneFrame} draggable={false}/>
		</div>
	);
}
