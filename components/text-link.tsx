import React, {DOMAttributes} from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './styles/text-link.module.scss';

type Props = {
	className?: string;
	id?: string;
	href?: string;
	children: React.ReactNode;
	onClick?: DOMAttributes<HTMLAnchorElement>['onClick'];
};

export default function TextLink({href, onClick, children, className, id}: Props) {
	if (onClick) {
		return (
			<a id={id} className={classNames(className, styles.link)} href={href} onClick={onClick}>{children}</a>
		);
	}

	if (href?.startsWith('/') || href?.startsWith('#')) {
		return (
			<Link href={href} className={classNames(className, styles.link)} id={id}>
				{children}
			</Link>
		);
	}

	return (
		<a href={href} id={id} target="_blank" rel="noreferrer" className={classNames(className, styles.link)}>{children}</a>
	);
}
