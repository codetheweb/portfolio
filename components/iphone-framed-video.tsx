import React from 'react';
import Image from 'next/image';
import styles from './styles/iphone-framed-video.module.scss';

export default function PhoneFramedVideo({src}: {src: string}) {
	return (
		<div className={styles.container}>
			<div className={styles.videoContainer}>
				<div className={styles.background}/>
				<video loop muted autoPlay playsInline src={src}/>
			</div>
			<Image src="/images/iphone-frame.png" layout="fill"/>
		</div>
	);
}
