import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic';
import {ParticlesProps} from 'react-tsparticles';
import usePrevious from 'react-use/lib/usePrevious';
import useDarkMode, {DarkModeConfig} from 'use-dark-mode';
import styles from './styles/wave.module.scss';

// TODO: upgrade to v2.0.0 of this library as soon as possible.
// Current version is really heavy.
const Particles = dynamic(async () => import('react-tsparticles'));

const particlesConfig: ParticlesProps['params'] = {
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		line_linked: {
			enable: false,
		},
		move: {
			direction: 'right',
			speed: 0.05,
		},
		size: {
			value: 2,
		},
		opacity: {
			anim: {
				enable: true,
				speed: 0.7,
				opacity_min: 0.05,
			},
		},
	},
	retina_detect: true,
};

export default function Wave() {
	const config: DarkModeConfig = {};
	const [isReady, setIsReady] = useState(false);

	if (global.document?.documentElement) {
		config.element = global.document.documentElement;
	}

	const {toggle, value} = useDarkMode(false, config);
	const previousValue = usePrevious(value);

	const wasChanged = (previousValue !== undefined) && (previousValue !== value);

	useEffect(() => {
		setIsReady(true);
	}, []);

	return (
		<div className={styles.container}>
			<svg height="0" width="0">
				<defs>
					<clipPath id="wave" clipPathUnits="objectBoundingBox" transform="scale(0.0007 0.003)">
						<path d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,112C672,85,768,75,864,106.7C960,139,1056,213,1152,245.3C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
					</clipPath>
				</defs>
			</svg>

			<div className={`${styles.particlesContainer} ${(value && isReady) ? styles.active : ''}`}>
				{
					value && (
						<Particles className={styles.particles} params={particlesConfig}/>
					)
				}
			</div>

			<div className={`${styles.themeSelector} ${value ? styles.isDark : styles.isLight} ${wasChanged ? styles.wasChanged : ''}`}>
				<div className={styles.body} onClick={toggle}/>
			</div>
		</div>
	);
}
