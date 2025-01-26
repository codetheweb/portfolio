import React from 'react';
import Script from 'next/script';
import {AppProps} from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from 'next-themes';
import {FirstLoadProvider} from '../lib/first-load';
import Wave from '../components/wave';
import '../styles/globals.scss';
import styles from './styles/app.module.scss';

const MyApp = ({Component, pageProps}: AppProps) => (
	<>
		<Head>
			<title>Max Isom</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
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
		<Script async src="https://um.maxisom.me/script.js" data-website-id="7adba6d9-6329-413c-b4f5-ee0b9ae93fa0"/>

		<ThemeProvider>
			<Wave/>

			<FirstLoadProvider>
				<div className={styles.wrapper}>
					<Component {...pageProps}/>
				</div>
			</FirstLoadProvider>
		</ThemeProvider>
	</>
);

export default MyApp;
