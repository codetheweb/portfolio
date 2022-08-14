import React from 'react';
import styles from './styles/icon-link.module.scss';

type IconLinkProps = {
	href: string;
	icon: React.ReactElement;
	children?: React.ReactElement | string;
};

export default function IconLink({href, icon, children}: IconLinkProps) {
	return (
		<a href={href} target="_blank" rel="noreferrer" className={styles.icon}>
			{icon}

			{children && (
				<span className={styles.children}>{children}</span>
			)}
		</a>
	);
}
