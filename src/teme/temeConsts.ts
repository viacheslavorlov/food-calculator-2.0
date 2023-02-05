import {createContext} from "react";

interface ITemeConsts {
    dark: "dark",
    light: "light"
}

export const ThemeConsts: ITemeConsts = {
    dark: "dark",
    light: "light"
} as const;

export interface ThemeContextProps {
    theme?: string;
    setTheme?: (theme: string) => void;
}

export const LOCAL_STORAGE_KEY_THEME = "LOCAL_STORAGE_KEY_THEME";

export const ThemeProviderComponent = createContext<ThemeContextProps>({})

