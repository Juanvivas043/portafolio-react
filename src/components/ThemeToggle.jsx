import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
    const theme = window.localStorage.getItem('theme');

    if (theme === 'dark') {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
    } else {
        setDarkMode(false);
    }

    }, []);

    const toggleTheme = () => {
        isDarkMode === false ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
        window.localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
        setDarkMode(!isDarkMode);

    }

    return (
        <button onClick={toggleTheme} className={cn("fixed top-15 right-8 z-50 p-2 rounded-full transition-colors",
            "focus:outline-hidden",
        )}>
            

            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> 
            : <Moon className="h-6 w-6 text-blue-900"/>}

        </button>
  )
}