import {useContext} from 'react';
import {LOCAL_STORAGE_KEY_THEME, ThemeProviderComponent} from './temeConsts';

export const useTheme = () => {
	const {theme, setTheme} = useContext(ThemeProviderComponent);

	const toggleTheme = () => {
		const newTheme = () => {
			switch (theme) {
			case 'light':
				return 'dark';
			case 'dark':
				return 'light';
			case undefined:
				return 'light';
			default:
				return 'light';
			}
		};
		if (setTheme) {
			setTheme(newTheme());
		}
		localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newTheme());
	};
	return {theme, toggleTheme};
};
