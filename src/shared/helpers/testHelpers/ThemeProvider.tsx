import {ThemeProviderComponent} from '../../../widgets/themeSwitcher/teme/temeConsts';
import {ReactNode} from 'react';
import {useTheme} from '../../../widgets/themeSwitcher/teme/useTheme';

interface JestThemeProviderProps {
	theme: string
	children: ReactNode
}

const JestThemeProvider = (props: JestThemeProviderProps) => {
	const {theme, children} = props;
	const {toggleTheme} = useTheme();

	return (
		<ThemeProviderComponent.Provider value={{theme, setTheme: toggleTheme}}>
			{children}
		</ThemeProviderComponent.Provider>
	);
};

export default JestThemeProvider;
