import React, {useEffect, useState} from 'react';
import {useTheme} from 'next-themes';
import Head from 'next/head';

const noTransitions = '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';

export const DisableThemeTransitionOnLoad = () => {
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const {theme} = useTheme();

	useEffect(() => {
		if (theme === undefined || !isFirstLoad) {
			return;
		}

		setIsFirstLoad(false);
	}, [theme, isFirstLoad]);

	if (isFirstLoad) {
		return (

			<Head>
				<style>{noTransitions}</style>
			</Head>
		);
	}

	return null;
};
