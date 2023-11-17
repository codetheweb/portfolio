import React from 'react';
import Link from 'next/link';
import {Home} from 'react-feather';
import styles from './styles/hovering-home-button.module.scss';

export const HoveringHomeButton = () => (
	<Link href="/" className={styles.homeButtonContainer} aria-label="go home">
		<span className={styles.homeButtonIcon}>
			<Home/>
		</span>
	</Link>
);
