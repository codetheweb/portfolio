import React, {useState, useEffect, useCallback} from 'react';
import {Particles, ParticlesProps} from 'react-particles';
import type {Engine} from 'tsparticles-engine';
import {loadFull} from 'tsparticles';
import usePrevious from 'react-use/lib/usePrevious';
import useColorMode from '../lib/use-color-mode';
import styles from './styles/wave.module.scss';
import NoSsr from './no-ssr';

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
	detectRetina: true,
	fullScreen: false,
};

export default function Wave() {
	const {colorMode, toggleColorMode} = useColorMode();
	const [isReady, setIsReady] = useState(false);

	const previousValue = usePrevious(colorMode);
	const wasChanged = (previousValue !== undefined) && (previousValue !== colorMode);
	const isDark = colorMode === 'dark';

	useEffect(() => {
		setIsReady(true);
	}, []);

	const particlesInit = useCallback(async (engine: Engine) => {
		if (typeof window === 'undefined') {
			return;
		}

		await loadFull(engine);
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

			<div className={`${styles.particlesContainer} ${(isDark && isReady) ? styles.active : ''}`}>
				<NoSsr>
					{
						isDark && (
							<Particles className={styles.particles} params={particlesConfig} init={particlesInit}/>
						)
					}
				</NoSsr>
			</div>

			<div className={`${styles.themeSelector} ${isDark ? styles.isDark : styles.isLight} ${wasChanged ? styles.wasChanged : ''}`}>
				<div className={styles.body} onClick={toggleColorMode}/>
			</div>
		</div>
	);
}
