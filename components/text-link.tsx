import React from 'react';
import Link from 'next/link';
import styles from './styles/text-link.module.scss';

export default function TextLink({href, children}: {href?: string; children: React.ReactNode}) {
	if (href?.startsWith('/')) {
		return (
			<Link href={href}>
				<a className={styles.link}>{children}</a>
			</Link>
		);
	}

	return (
		<a href={href} target="_blank" rel="noreferrer" className={styles.link}>{children}</a>
	);
}
