import Link from "next/link"


interface NavItemProps {
    children: any
    href: string
    active?: boolean
    onClick?: () => void
}

const NavItem = (props: NavItemProps) =>{
    return (
        <Link href={props.href}
        
        className={`
        px-6 pb-1 pt-6
        bg-ddFour font-bold text-ddFive text-xl
        border-2 border-ddTer rounded-t-3xl
        hover:scale-[1.1] hover:cursor-pointer hover:text-white
        ${props.active && 'bg-ddactive text-white scale-[1.1]'}
        `}
        onClick={props.onClick}
        >{props.children}</Link>
    )
}

export default NavItem