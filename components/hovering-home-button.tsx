import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {Home} from 'react-feather';
import styles from './styles/hovering-home-button.module.scss';

export const HoveringHomeButton = () => {
	const pageBottomRef = useRef<HTMLDivElement>(null);
	const [bounce, setBounce] = useState(false);
	const [hasBouncedAtBottom, setHasBouncedAtBottom] = useState(false);

	useEffect(() => {
		if (!bounce) {
			return;
		}

		const timeout = setTimeout(() => {
			setBounce(false);
		}, 1000);
		return () => {
			clearTimeout(timeout);
		};
	}, [bounce]);

	useEffect(() => {
		const handleScroll = () => {
			if (pageBottomRef.current && !hasBouncedAtBottom) {
				const rect = pageBottomRef.current.getBoundingClientRect();
				if (rect.top <= window.innerHeight + 800 && rect.bottom >= 0) {
					setBounce(true);
					setHasBouncedAtBottom(true);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [hasBouncedAtBottom]);

	return (
		<>
			<div ref={pageBottomRef}/>
			<Link href="/" className={`${styles.homeButtonContainer} ${bounce ? styles.bounce : ''}`} aria-label="go home">
				<span className={styles.homeButtonIcon}>
					<Home/>
				</span>
			</Link>
		</>
	);
};
