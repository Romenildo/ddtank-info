import NavBar from "./navbar"


interface HeaderProps {

}

const Header = (props: HeaderProps) =>{
    return (
        <header className="bg-ddFirst min-h-[200px] border-[3px] border-ddFirst">
            <div>
                Header
            </div>
            <NavBar/>
        </header>
    )
}

export default Header