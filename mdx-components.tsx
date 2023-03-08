import React from 'react';
import type {MDXComponents} from 'mdx/types';
import classNames from 'classnames';
import TextLink from './components/text-link';

const getHeaderId = (children: React.ReactNode) => children?.toString().toLocaleLowerCase().replaceAll(' ', '-');

const WrappedHeader = (props: any) => {
	const id = getHeaderId(props.children);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const H = props.size;

	return (
		<H id={id}>
			<a href={`#${id ?? ''}`}>
				{props.children}
			</a>
		</H>
	);
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
	...components,
	a: (props: any) => <TextLink {...props}/>,
	pre: props => <pre {...props} className={classNames(props.className, 'disable-default-code-styles')}/>,
	h1: props => <WrappedHeader size="h1">{props.children}</WrappedHeader>,
	h2: props => <WrappedHeader size="h2">{props.children}</WrappedHeader>,
	h3: props => <WrappedHeader size="h3">{props.children}</WrappedHeader>,
});
