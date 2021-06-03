import React from 'react';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faApple, faGithub, faChrome, faFirefox} from '@fortawesome/free-brands-svg-icons';
import IconLink from '../icon-link';
import styles from './styles/links.module.scss';

export default function Links({year, website, apple, github, firefox, chrome}: {year: string; website?: string; apple?: string; github?: string; firefox?: string; chrome?: string}) {
	return (
		<div className={styles.container}>
			<span className={styles.year}>{year}</span>

			<div>
				{apple && <IconLink href={apple} icon={faApple}/>}

				{github && <IconLink href={github} icon={faGithub}/>}

				{website && <IconLink href={website} icon={faLink}/>}

				{firefox && <IconLink href={firefox} icon={faFirefox}/>}

				{chrome && <IconLink href={chrome} icon={faChrome}/>}
			</div>
		</div>
	);
}
