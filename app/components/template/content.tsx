

interface ContentProps {
    children:any
}

const Content = (props: ContentProps) =>{
    return (
        <main className="bg-ddSec border-[3px] border-ddFirst">
        {props.children}
        </main>
    )
}

export default Content