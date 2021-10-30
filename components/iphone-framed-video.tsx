import React from 'react';
import Image from 'next/image';
import styles from './styles/iphone-framed-video.module.scss';
import frameImg from '/public/images/iphone-frame.png';

export default function PhoneFramedVideo({src}: {src: string}) {
	return (
		<div className={styles.container}>
			<div className={styles.videoContainer}>
				<div className={styles.background}/>
				<video loop muted autoPlay playsInline>
					<source src={src}/>
				</video>
			</div>
			<Image src={frameImg} layout="fill"/>
		</div>
	);
}
