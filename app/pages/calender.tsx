import Calender from "../components/template/calender/calender"

import { dungeonsWeek } from "@/app/api/data/dungeons"
import Content from "../components/template/content"

interface CalenderContentProps {

}

const CalenderContent = (props: CalenderContentProps) =>{
    return (
        <Content>
            <div className="flex gap-5 mt-6 ml-4">
                <button className="border-4 border-ddFour text-ddFour font-bold p-1">Diário</button>
                <button className="border-4 border-ddFour text-ddFour font-bold p-1">Semanal</button>
            </div>

            <Calender dayDungeons={dungeonsWeek.monday}/>
        </Content>
    )
}

export default CalenderContent