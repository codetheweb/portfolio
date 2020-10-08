import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './styles/icon-link.module.scss';

export default function IconLink({href, icon}: {href: string; icon: any}) {
	return (
		<a href={href} target="_blank" rel="noreferrer" className={styles.icon}>
			<FontAwesomeIcon icon={icon}/>
		</a>
	);
}
