import React, {useContext, useEffect, useState} from 'react';
import {useRouter} from 'next/router';

const Context = React.createContext('true');

const FirstLoadProvider = ({children}: {children: React.ReactElement | React.ReactElement[]}) => {
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = () => {
			setIsFirstLoad(false);
		};

		router.events.on('routeChangeStart', handleRouteChange);

		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	});

	return (
		<Context.Provider value={isFirstLoad.toString()}>
			{children}
		</Context.Provider>
	);
};

const useFirstLoad = () => {
	const value = useContext(Context);

	return value === 'true';
};

export {FirstLoadProvider, useFirstLoad};
