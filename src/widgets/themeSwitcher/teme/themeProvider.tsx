import {
	FC, ReactNode, useMemo, useState,
	PropsWithChildren
} from 'react';

import { LOCAL_STORAGE_KEY_THEME, ThemeConsts, ThemeProviderComponent } from './temeConsts';

const defaultTheme = localStorage.getItem(JSON.stringify(LOCAL_STORAGE_KEY_THEME)) || ThemeConsts.light;

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({ children }) => {
	const [theme, setTheme] = useState(defaultTheme);

	const defaultProps = useMemo(() => ({
		theme: theme,
		setTheme: setTheme,
	}), [theme]);
	return (
		<ThemeProviderComponent.Provider value={defaultProps}>
			{children}
		</ThemeProviderComponent.Provider>
	);
};
