import React from 'react';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faReddit, faKeybase, faLinkedin, faHackerNewsSquare} from '@fortawesome/free-brands-svg-icons';
import {useFirstLoad} from '../lib/first-load';
import styles from './styles/social-buttons.module.scss';
import IconLink from './icon-link';

const ACCOUNTS = [
	{
		link: 'https://github.com/codetheweb',
		icon: faGithub
	},
	{
		link: 'https://www.linkedin.com/in/max-isom-43678315a/',
		icon: faLinkedin
	},
	{
		link: 'https://keybase.io/maxisom',
		icon: faKeybase
	},
	{
		link: 'https://www.reddit.com/user/codyweby/',
		icon: faReddit
	},
	{
		link: 'https://news.ycombinator.com/user?id=codetheweb',
		icon: faHackerNewsSquare
	},
	{
		link: 'https://www.buymeacoffee.com/maxisom',
		icon: faCoffee
	}
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
