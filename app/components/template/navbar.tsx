import NavItem from "./navItem"


interface NavBarProps {

}

const NavBar = (props: NavBarProps) =>{
    return (
        <nav className="relative top-[58%] w-fit">
            <ul className="flex gap-4 pl-2">
                <NavItem href="">Principal</NavItem>
                <NavItem href="" active>Agenda</NavItem>
                <NavItem href="">Personagem</NavItem>
            </ul>
        </nav>
    )
}

export default NavBar