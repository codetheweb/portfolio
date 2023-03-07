import React from 'react';
import styles from './styles/header.module.scss';

export default function Header({size, children, topMargin = false, id}: {size: 'h1' | 'h2' | 'h3'; children: React.ReactNode; topMargin?: boolean; id?: string}) {
	const H = size;

	return (
		<H className={`${styles.header} ${topMargin ? styles.topMargin : ''}`} id={id}>{children}</H>
	);
}
