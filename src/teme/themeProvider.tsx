import {LOCAL_STORAGE_KEY_THEME, ThemeConsts, ThemeProviderComponent} from "./temeConsts";
import React, {useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY_THEME) || ThemeConsts.light;

export const ThemeProvider = ({children}: any) => {
    const [theme, setTheme] = useState(defaultTheme);


    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])
    return (
        <ThemeProviderComponent.Provider value={defaultProps}>
            {children}
        </ThemeProviderComponent.Provider>
    )
}