import React from 'react';
import Image, {ImageProps} from 'next/image';
import styles from './styles/embedded-img.module.scss';

type Size = 'large' | 'medium' | 'small';

type Props = {
	size: Size;
	isRounded?: boolean;
	hasPadding?: boolean;
	hasPriority?: boolean;
} & ImageProps;

const EmbeddedImg = ({
	size,
	isRounded = false,
	hasPadding = false,
	hasPriority = false,
	...rest}: Props) => {
	const className = `${styles.media} ${styles[size]} ${isRounded ? styles.rounded : ''} ${hasPadding ? styles.padding : ''}`;

	return (
		<div className={className}>
			<Image
				// Bad union discrimination
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				placeholder={typeof rest.src === 'string' ? 'empty' as any : 'blur' as any}
				priority={hasPriority}
				{...rest as ImageProps}/>
		</div>
	);
};

export default EmbeddedImg;
