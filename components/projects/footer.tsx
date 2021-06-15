import React from 'react';
import {useRouter} from 'next/router';
import {useFirstLoad} from '../../lib/first-load';
import TextLink from '../text-link';

const Footer = () => {
	const isFirstLoad = useFirstLoad();
	const router = useRouter();

	const handleGoToHome = async (event: React.MouseEvent) => {
		event.preventDefault();

		if (isFirstLoad) {
			await router.push('/');
		} else {
			router.back();
		}
	};

	return (
		<div style={{marginTop: '3rem', lineHeight: '1.5'}}>
			<TextLink href="/" onClick={handleGoToHome}>return to home</TextLink>
		</div>
	);
};

export default Footer;
