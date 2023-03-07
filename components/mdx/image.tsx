import React from 'react';
import Image, {ImageProps} from 'next/image';

export const ImageForMdx = (props: ImageProps) => <Image {...props} style={{width: '100%', height: 'auto'}}/>;
