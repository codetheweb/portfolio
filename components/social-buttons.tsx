import React from 'react';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faReddit, faKeybase, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {motion} from 'framer-motion';
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
		link: 'https://www.buymeacoffee.com/maxisom',
		icon: faCoffee
	}
];

const APPEAR = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1
	}
};

export default function SocialButtons() {
	return (
		<motion.div variants={{show: {transition: {staggerChildren: 0.2, delayChildren: 0}}}} initial="hidden" animate="show" className={styles.container}>
			{
				ACCOUNTS.map(account => (
					<motion.div key={account.link} variants={APPEAR} transition={{duration: 0.8}}>
						<IconLink href={account.link} icon={account.icon}/>
					</motion.div>
				))
			}
		</motion.div>
	);
}
