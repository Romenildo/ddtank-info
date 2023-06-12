import CalenderContent from "./calender/calenderContent"


interface ContentProps {

}

const Content = (props: ContentProps) =>{
    return (
        <main className="bg-ddSec border-[3px] border-ddFirst">
            <CalenderContent/>

        </main>
    )
}

export default Content