import React from 'react';
import useDarkMode from 'use-dark-mode';
import styles from './styles/wave.module.scss';

export default function Wave() {
	const config: any = {};

	if (global.document?.documentElement) {
		config.element = global.document.documentElement;
	}

	const darkMode = useDarkMode(true, config);

	return (
		<div className={styles.container}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
				<path d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,112C672,85,768,75,864,106.7C960,139,1056,213,1152,245.3C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
			</svg>

			<div className={styles.themeSelector}>
				<div className={styles.body} onClick={darkMode.toggle}/>
			</div>
		</div>
	);
}
