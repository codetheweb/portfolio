import React from 'react';
import styles from './styles/header.module.scss';

export default function Header({size, children, topMargin = false}: {size: 'h1' | 'h2'; children: React.ReactNode; topMargin?: boolean}) {
	const H = size;

	return (
		<H className={`${styles.header} ${topMargin ? styles.topMargin : ''}`}>{children}</H>
	);
}
