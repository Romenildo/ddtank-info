'use client'

import Link from "next/link"

interface NavItemProps {
    children: any
    href: string
    active?: boolean
    value?: string
    onClick?: () => void
    special?: string
}

const NavItem = (props: NavItemProps) =>{


    return (
        <li>
            <Link 
            href={props.href}
            className={`
            px-5 pb-1 pt-5
            bg-ddFour font-bold text-ddFive text-xl
            border-2 border-ddTer rounded-t-3xl
            hover:scale-[1.1] hover:cursor-pointer hover:text-white
            ${props.special && 'bg-purple text-white'}
            ${props.active && 'bg-ddactive text-white scale-[1.1]'}
            `}
            onClick={props.onClick}
        >{props.children}</Link>
        </li>  
    )
}

export default NavItem