import React from 'react';
import Image, {ImageProps, StaticImageData} from 'next/image';
import classNames from 'classnames';
import styles from './styles/image.module.scss';

export const ImageForMdx = (props: ImageProps & {invertInDarkMode?: boolean}) => (
	<a href={typeof props.src === 'string' ? props.src : (props.src as StaticImageData).src}>
		<Image {...props} style={{width: '100%', height: 'auto'}} className={classNames(props.className, props.invertInDarkMode ? styles.invertInDarkMode : undefined)}/>
	</a>
);
