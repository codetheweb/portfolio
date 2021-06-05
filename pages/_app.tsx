import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Wave from '../components/wave';
import '../styles/globals.scss';
import styles from './styles/app.module.scss';

config.autoAddCss = false;

const MyApp = ({Component, pageProps}: AppProps) => {
	return (
		<>
			<Head>
				<title>Max Isom</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
				<script async defer data-domain="maxisom.me" src="https://plause.maxisom.me/js/plausible.js"/>

				<link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
				<link rel="manifest" href="/images/favicon/site.webmanifest"/>
				<link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#3e90a8"/>
				<link rel="shortcut icon" href="/images/favicon/favicon.ico"/>
				<meta name="msapplication-TileColor" content="#000000"/>
				<meta name="msapplication-config" content="/images/favicon/browserconfig.xml"/>
				<meta name="theme-color" content="#000000"/>

			</Head>

			<Wave/>

			<div className={styles.container}>
				<Component {...pageProps}/>
			</div>
		</>
	);
};

export default MyApp;
