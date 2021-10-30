import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import styles from './styles/icon-link.module.scss';

type IconLinkProps = {
	href: string;
	icon: IconProp;
	children?: React.ReactElement | string;
};

export default function IconLink({href, icon, children}: IconLinkProps) {
	return (
		<a href={href} target="_blank" rel="noreferrer" className={styles.icon}>
			<FontAwesomeIcon icon={icon}/>

			{children && (
				<span className={styles.children}>{children}</span>
			)}
		</a>
	);
}
