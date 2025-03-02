import React, {useEffect, useState} from 'react';
import {initParticlesEngine, IParticlesProps, Particles} from '@tsparticles/react';
import {loadSlim} from '@tsparticles/slim';
import usePrevious from 'react-use/lib/usePrevious';
import useColorMode from '../lib/use-color-mode';
import styles from './styles/wave.module.scss';
import NoSsr from './no-ssr';

const options: IParticlesProps['options'] = {
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
				width: 800,
				height: 800,
			},
		},
		size: {
			value: {
				min: 1,
				max: 3,
			},
		},
		opacity: {
			value: {
				min: 0,
				max: 1,
			},
			animation: {
				enable: true,
				speed: {
					min: 0.05,
					max: 0.2,
				},
				sync: true,
				startValue: 'random',
				mode: 'random',
			},
		},
	},
	detectRetina: true,
	fullScreen: false,
};

const Stars = React.memo(() => <Particles className={styles.particles} options={options}/>);

const Wave = () => {
	const [init, setInit] = useState(false);
	const {colorMode, toggleColorMode} = useColorMode();

	const previousValue = usePrevious(colorMode);
	const wasChanged = (previousValue !== undefined) && (previousValue !== colorMode);
	const isDark = colorMode === 'dark';

	useEffect(() => {
		void initParticlesEngine(async engine => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
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

			<NoSsr>
				<div className={`${styles.particlesContainer} ${(isDark) ? styles.active : ''}`}>
					{init && <Stars/>}
				</div>
			</NoSsr>

			<div className={`${styles.themeSelector} ${isDark ? styles.isDark : styles.isLight} ${wasChanged ? styles.wasChanged : ''}`}>
				<button type="button" className={styles.body} onClick={toggleColorMode}/>
			</div>
		</div>
	);
};

export default Wave;
