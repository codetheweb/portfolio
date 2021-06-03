import React from 'react';
import Img from 'react-optimized-image';
import styles from './styles/iphone-framed-video.module.scss';

export default function PhoneFramedVideo({src}: {src: string}) {
	return (
		<div className={styles.container}>
			<div className={styles.videoContainer}>
				<div className={styles.background}/>
				<video loop muted autoPlay playsInline src={src}/>
			</div>
			<Img src={require('../images/iphone-frame.png') as ImgSrc} sizes={[500]} draggable={false}/>
		</div>
	);
}
