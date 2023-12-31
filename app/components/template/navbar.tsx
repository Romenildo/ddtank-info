'use client'

import NavItem from "./navItem"
import useRoutes from "@/app/hooks/useRoute"


interface NavBarProps {

}

const NavBar = (props: NavBarProps) =>{

   const routes = useRoutes()

    return (
        <nav className="relative top-[70%] w-fit">
            <ul className="flex gap-4 pl-2">
                {routes.map((item:any)=>(
                    <NavItem key={item.label} href={item.href} active={item.active} value={item.value} special={item.special}>{item.label}</NavItem>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar