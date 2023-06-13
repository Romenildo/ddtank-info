

interface ContentProps {
    children:any
}

const Content = (props: ContentProps) =>{
    return (
        <main className="bg-ddSec border-[3px] border-ddFirst pb-5">
            {props.children}
        </main>
    )
}

export default Content