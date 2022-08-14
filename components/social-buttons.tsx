import React from 'react';
import {GitHub, Linkedin, Twitter} from 'react-feather';
import {useFirstLoad} from '../lib/first-load';
import styles from './styles/social-buttons.module.scss';
import IconLink from './icon-link';

const ACCOUNTS = [
	{
		link: 'https://github.com/codetheweb',
		icon: <GitHub/>,
	},
	{
		link: 'https://www.linkedin.com/in/max-isom-43678315a/',
		icon: <Linkedin/>,
	},
	{
		link: 'https://twitter.com/mtisom',
		icon: <Twitter/>,
	},
];

export default function SocialButtons() {
	const isFirstLoad = useFirstLoad();

	return (
		<div className={`${styles.container} ${isFirstLoad ? styles.animate : ''}`}>
			{
				ACCOUNTS.map(account => (
					<div key={account.link}>
						<IconLink href={account.link} icon={account.icon}/>
					</div>
				))
			}
		</div>
	);
}
