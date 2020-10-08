import React from 'react';
import styles from './styles/title.module.scss';

export default function Title({label}: {label: string}) {
	return (
		<h1 className={styles.title}>{label}</h1>
	);
}
