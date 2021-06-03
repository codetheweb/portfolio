import React from 'react';
import Img from 'react-optimized-image';
import styles from './styles/embedded-img.module.scss';

type Size = 'large' | 'medium' | 'small';

const EmbeddedImg = ({size, src, rounded = false, padding = false}: {size: Size; src: string; rounded?: boolean; padding?: boolean}) => {
	const className = `${styles.media} ${styles[size]} ${rounded ? styles.rounded : ''} ${padding ? styles.padding : ''}`;

	if (src.includes('gif')) {
		return <Img className={className} src={require(`../images${src}`) as ImgSrc} sizes={[200, 500]} webp={false}/>;
	}

	return <Img className={className} src={require(`../images${src}`) as ImgSrc} sizes={[200, 500, 1000]}/>;
};

export default EmbeddedImg;
