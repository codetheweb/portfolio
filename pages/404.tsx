import React from 'react';
import Header from '../components/header';
import TextLink from '../components/text-link';

export default function NotFound() {
	return (
		<div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
			<Header size="h2">This page could not be found.</Header>

			<div style={{marginTop: '2rem'}}>
				<TextLink href="/">Home</TextLink>
			</div>
		</div>
	);
}
