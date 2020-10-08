import React from 'react';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faApple, faGithub} from '@fortawesome/free-brands-svg-icons';
import styles from './styles/links.module.scss';
import IconLink from '../icon-link';

export default function Links({year, website, apple, github}: {year: string; website?: string; apple?: string; github?: string}) {
	return (
		<div className={styles.container}>
			<span className={styles.year}>{year}</span>

			<div>
				{apple && <IconLink href={apple} icon={faApple}/>}

				{website && <IconLink href={website} icon={faLink}/>}

				{github && <IconLink href={github} icon={faGithub}/>}
			</div>
		</div>
	);
}
