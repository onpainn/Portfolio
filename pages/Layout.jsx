import { ArrowBigLeft } from "lucide-react"
import { useMemo } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
import Header from "../components/container/header/Header"

export function Layout() {

    const { pathname } = useLocation()
    const isHomePage = useMemo(() => pathname === '/', [pathname])

    return (
        <>
    <Header />
    <>{
        !isHomePage &&(
            <div className=" h-14 p-2 dark:text-white dark:bg-neutral-600">
                <Link to='/' className=" absolute">
                    <ArrowBigLeft strokeWidth={1} size={40} className="bg-neutral-100 dark:bg-neutral-700  p-2 rounded-lg" />
                </Link>
            </div>
        )
    }
    <Outlet />
    </>
    </>)
}
