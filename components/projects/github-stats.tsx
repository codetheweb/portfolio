import React from 'react';
import Tilt from 'react-parallax-tilt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMeteor, faHistory, faTimesCircle, faUserFriends, IconDefinition, faArrowCircleDown} from '@fortawesome/free-solid-svg-icons';
import styles from './styles/github-stats.module.scss';

const Stat = ({value, icon, description}: {value: number | string; icon: IconDefinition; description: string}) => (
	<div className={styles.stat}>
		<FontAwesomeIcon icon={icon} className={styles.icon}/> <b>{value}</b> {description}
	</div>
);

const GitHubStats = ({stars, issues, contributors, commits, installs}: {stars: number; issues: number; contributors: number; commits: number; installs: string}) => (
	<Tilt className={styles.container}>
		<Stat value={stars} icon={faMeteor} description="stars"/>

		<Stat value={commits} icon={faHistory} description="commits"/>

		<Stat value={issues} icon={faTimesCircle} description="closed issues"/>

		<Stat value={contributors} icon={faUserFriends} description="unique contributors"/>

		<Stat value={installs} icon={faArrowCircleDown} description="installs"/>
	</Tilt>
);

export default GitHubStats;
