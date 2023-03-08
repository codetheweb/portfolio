import React from 'react';
import Image, {ImageProps, StaticImageData} from 'next/image';

export const ImageForMdx = (props: ImageProps) => (
	<a href={typeof props.src === 'string' ? props.src : (props.src as StaticImageData).src}>
		<Image {...props} style={{width: '100%', height: 'auto'}}/>
	</a>
);
