export const getPublicOrigin = (): string => {
	const hostAndPort = process.env.NEXT_PUBLIC_VERCEL_URL ?? process.env.VERCEL_URL;

	if (!hostAndPort) {
		throw new Error('VERCEL_URL is not defined');
	}

	if (hostAndPort.includes('localhost')) {
		return `http://${hostAndPort}`;
	}

	return `https://${hostAndPort}`;
};
