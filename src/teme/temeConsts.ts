import {createContext} from 'react';


export enum ThemeConsts {
    dark = 'dark',
    light = 'light'
}

export interface ThemeContextProps {
    theme?: string;
    setTheme?: (theme: string) => void;
}

export const LOCAL_STORAGE_KEY_THEME = 'LOCAL_STORAGE_KEY_THEME';

export const ThemeProviderComponent = createContext<ThemeContextProps>({});

