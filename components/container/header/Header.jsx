import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../../hooks/useTheme"
import { memo } from "react"

function Header() {
    const {theme, toggleTheme} = useTheme()
    return (
        <header className="w-full flex items-center justify-between p-2 text-black  dark:text-white bg-white dark:bg-neutral-600" >
            <h1>PortFolio</h1>
            <button className="p-2 hover:rotate-360 rounded-4xl hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:text-white duration-400 ease-in-out" onClick={toggleTheme}>
                {theme === 'dark' ? <Moon strokeWidth={1}/> : <Sun strokeWidth={1} />}
            </button>
        </header>
    )
}
export default memo(Header)
