import React from 'react';
import dynamic from 'next/dynamic';

const NoSsr = ({children}: {children: React.ReactNode}) => children as React.ReactElement;

export default dynamic(async () => Promise.resolve(NoSsr), {
	ssr: false,
});
