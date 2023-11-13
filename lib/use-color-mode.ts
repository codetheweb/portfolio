import {useTheme} from 'next-themes';

const useColorMode = () => {
	const {resolvedTheme, setTheme} = useTheme();

	return {
		colorMode: resolvedTheme as 'light' | 'dark' | undefined,
		toggleColorMode: () => {
			setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
		},
	};
};

export default useColorMode;
