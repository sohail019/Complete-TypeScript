import { createContext, useEffect, useState, ReactNode } from "react";

//* Define types for the context value
interface ThemeContextType {
    theme: string,
    toggleTheme: () => void
}


//* Create Context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider:React.FC<{children: ReactNode}> = ({children}) => {

    const [theme, setTheme] = useState<string>(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme ? savedTheme : 'light'
    })


    //? Update localStorage and the document class whenever theme changes
    useEffect(() => {
        localStorage.setItem('theme', theme)
        if(theme === "dark") {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
    
}