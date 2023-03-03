import React, {DOMAttributes} from 'react';
import Link from 'next/link';
import styles from './styles/text-link.module.scss';

type Props = {
	href?: string;
	children: React.ReactNode;
	onClick?: DOMAttributes<HTMLAnchorElement>['onClick'];
};

export default function TextLink({href, onClick, children}: Props) {
	if (onClick) {
		return (
			<a className={styles.link} href={href} onClick={onClick}>{children}</a>
		);
	}

	if (href?.startsWith('/')) {
		return (
			<Link href={href} className={styles.link}>
				{children}
			</Link>
		);
	}

	return (
		<a href={href} target="_blank" rel="noreferrer" className={styles.link}>{children}</a>
	);
}
