import React from 'react';
import styles from './styles/embedded-video.module.scss';

export default function EmbeddedVideo({src, wrapVertically = false}: {src: string; wrapVertically?: boolean}) {
	return (
		<div className={`${styles.container} ${wrapVertically ? styles.wrapVertically : ''}`}>
			<video controls src={`${src}#t=0.001`} className={styles.video}/>
		</div>
	);
}
