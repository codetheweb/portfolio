import React, {useEffect, useState} from 'react';

const NoSsr = ({children, when = true}: {children: React.ReactNode; when?: boolean}): React.ReactElement => {
	const [isMounted, setIsMounted] = useState(!when);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{isMounted ? children : null}</>;
};

export default NoSsr;
