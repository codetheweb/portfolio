import useDarkMode, {DarkModeConfig} from 'use-dark-mode';

const useColorMode = () => {
	const config: DarkModeConfig = {};

	if (global.document?.documentElement) {
		config.element = global.document.documentElement;
	}

	const {toggle, value} = useDarkMode(false, config);

	return {
		colorMode: value ? 'dark' as const : 'light' as const,
		toggleColorMode: toggle,
	};
};

export default useColorMode;
