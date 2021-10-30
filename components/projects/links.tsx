import React, {useMemo} from 'react';
import {faLink, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {faApple, faGithub, faChrome, faFirefox} from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';
import {Except} from 'type-fest';
import IconLink from '../icon-link';
import styles from './styles/links.module.scss';

interface LinksProps {
	year: string;
	website?: string;
	apple?: string;
	github?: string;
	firefox?: string;
	chrome?: string;
	areVertical?: boolean;
	className?: string;
}

type Options = keyof Except<LinksProps, 'year' | 'areVertical' | 'className'>;

const ITEM_TYPE_TO_ICON: Record<Options, IconDefinition> = {
	apple: faApple,
	github: faGithub,
	website: faLink,
	firefox: faFirefox,
	chrome: faChrome,
};

export default function Links(props: LinksProps) {
	const {year, areVertical, className} = props;

	// Preact seems to add some props
	const links = useMemo(() => {
		const l: Partial<Record<Options, string>> = {};

		for (const [key, value] of Object.entries(props)) {
			if (Object.keys(ITEM_TYPE_TO_ICON).includes(key)) {
				l[key as Options] = value as string;
			}
		}

		return l;
	}, [props]);

	return (
		<div className={classNames(styles.container, areVertical ? styles.vertical : false, className)}>
			<span className={styles.year}>{year}</span>

			<div className={styles.links}>
				{Object.keys(links).map(linkType => {
					const unwrappedUrl = links[linkType as keyof typeof links]!;

					const url = new URL(unwrappedUrl);

					return (
						<div key={linkType} className={styles.linkWrapper}>
							<IconLink href={unwrappedUrl} icon={ITEM_TYPE_TO_ICON[linkType as Options]}>
								{areVertical ? `${url.hostname}${url.pathname === '/' ? '' : url.pathname}` : undefined}
							</IconLink>
						</div>
					);
				})}
			</div>
		</div>
	);
}
