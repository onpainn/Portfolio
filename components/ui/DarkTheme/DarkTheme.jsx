import { useEffect, useState } from "react"
import { ThemeContext } from "./theme.context";

export function DarkTheme({children}) {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
    useEffect( () => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    },[theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark'?'light':'dark')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
