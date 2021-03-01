import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import {config} from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line import/no-unassigned-import
import '@fortawesome/fontawesome-svg-core/styles.css';
import Wave from '../components/wave';
// eslint-disable-next-line import/no-unassigned-import
import '../styles/globals.scss';
import styles from './styles/app.module.scss';

config.autoAddCss = false;

const MyApp = ({Component, pageProps}: AppProps) => {
	return (
		<>
			<Head>
				<title>Max Isom</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
				<script async defer data-domain="maxisom.me" src="https://analytics.maxisom.me/js/plausible.js"/>
			</Head>

			<Wave/>

			<div className={styles.container}>
				<Component {...pageProps}/>
			</div>
		</>
	);
};

export default MyApp;
