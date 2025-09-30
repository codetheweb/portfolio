export const getPublicOrigin = (): string => {
	// Use hardcoded domain for production
	if (process.env.NODE_ENV === 'development') {
		return 'http://localhost:3000';
	}

	return 'https://maxisom.me';
};
