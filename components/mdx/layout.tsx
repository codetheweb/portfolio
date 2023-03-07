import React from 'react';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import styles from './styles/layout.module.scss';

interface MdxLayoutProps {
	children: React.ReactNode;
	meta: {
		title: string;
	};
}

export const MdxLayout = ({children}: MdxLayoutProps) => (
	<div className={styles.container}>
		{children}
	</div>
);
