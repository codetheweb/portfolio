import React from 'react';
import Image from 'next/image';
import styles from './styles/embedded-img.module.scss';

type Size = 'large' | 'medium' | 'small';

type Props = {
	size: Size;
	src: string;
	isRounded?: boolean;
	hasPadding?: boolean;
	width: number;
	height: number;
	hasPriority?: boolean;
};

const EmbeddedImg = ({size, src, isRounded: rounded = false, hasPadding: padding = false, hasPriority: priority = false, width, height}: Props) => {
	const className = `${styles.media} ${styles[size]} ${rounded ? styles.rounded : ''} ${padding ? styles.padding : ''}`;

	return (
		<div className={className}>
			<Image src={src} width={width} height={height} priority={priority}/>
		</div>
	);
};

export default EmbeddedImg;
