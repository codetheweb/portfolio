import Link from 'next/link';
import React from 'react';
import styles from './styles/icon-link.module.scss';

type IconLinkProps = {
	href: string;
	icon: React.ReactElement;
	children?: React.ReactElement | string;
};

export default function IconLink({href, icon, children}: IconLinkProps) {
	const isExternal = !href.startsWith('/');

	return (
		<Link href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined} className={styles.iconWrapper}>
			<span className={styles.icon}>
				{icon}
			</span>

			{children && (
				<span className={styles.children}>{children}</span>
			)}
		</Link>
	);
}
