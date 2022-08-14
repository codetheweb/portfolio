import React, {useCallback} from 'react';
import {ChevronDown} from 'react-feather';
import classNames from 'classnames';
import {useWindowScroll} from 'react-use';
import styles from './styles/scroll-indicator.module.scss';

type ScrollIndicatorProps = Partial<Pick<HTMLDivElement, 'className'>>;

const ScrollIndicator = (props: ScrollIndicatorProps) => {
	const {y} = useWindowScroll();

	const handleScroll = useCallback(() => {
		if (window.innerHeight) {
			window.scrollBy({top: window.innerHeight / 2, behavior: 'smooth'});
		}
	}, []);

	return (
		<div className={classNames(styles.container, props.className)}>
			<ChevronDown
				className={styles.icon}
				size={40}
				style={y === 0 ? {} : {opacity: 0}}
				onClick={handleScroll}/>
		</div>
	);
};

export default ScrollIndicator;
