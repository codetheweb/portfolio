import React from 'react';
import type {MDXComponents} from 'mdx/types';
import Header from './components/header';
import TextLink from './components/text-link';

const getHeaderId = (children: React.ReactNode) => children?.toString().toLocaleLowerCase().replaceAll(' ', '-');

const WrappedHeader = (props: any) => {
	const id = getHeaderId(props.children);

	return (
		<Header size={props.size as 'h1'} id={id}>
			<a href={`#${id ?? ''}`}>
				{props.children}
			</a>
		</Header>
	);
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
	...components,
	a: (props: any) => <TextLink {...props}/>,
	h1: props => <WrappedHeader size="h1">{props.children}</WrappedHeader>,
	h2: props => <WrappedHeader size="h2">{props.children}</WrappedHeader>,
	h3: props => <WrappedHeader size="h3">{props.children}</WrappedHeader>,
});
