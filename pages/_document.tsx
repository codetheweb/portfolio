import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

const themeSetupJS = `
  (function () {
    // Change these if you use something different in your hook.
    const storageKey = 'darkMode';
    const classNameDark = 'dark-mode';
    const classNameLight = 'light-mode';

    function setClassOnDocumentBody(darkMode) {
      document.documentElement.classList.add(darkMode ? classNameDark : classNameLight);
      document.documentElement.classList.remove(darkMode ? classNameLight : classNameDark);
    }

    const preferDarkQuery = '(prefers-color-scheme: dark)';
    const mql = window.matchMedia(preferDarkQuery);
    const supportsColorSchemeQuery = mql.media === preferDarkQuery;
    let localStorageTheme = null;
    try {
      localStorageTheme = localStorage.getItem(storageKey);
    } catch {}

    const localStorageExists = localStorageTheme !== null;
    if (localStorageExists) {
      localStorageTheme = JSON.parse(localStorageTheme);
    }

    // Determine the source of truth
    if (localStorageExists) {
      // Source of truth from localStorage
      setClassOnDocumentBody(localStorageTheme);
    } else if (supportsColorSchemeQuery) {
      // Source of truth from system
      setClassOnDocumentBody(mql.matches);
      localStorage.setItem(storageKey, mql.matches);
    } else {
      // Source of truth from document.body
      const isDarkMode = document.documentElement.classList.contains(classNameDark);
      localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
    }
  })();
`;

class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head/>
				{/* eslint-disable-next-line react/no-danger */}
				<script dangerouslySetInnerHTML={{__html: themeSetupJS}}/>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
