import Calender from "./calender"

import { dungeonsWeek } from "@/app/api/data/dungeons"

interface CalenderContentProps {

}

const CalenderContent = (props: CalenderContentProps) =>{
    return (
        <div>
            <div className="flex gap-5 mt-6 ml-4">
                <button className="border-4 border-ddFour text-ddFour font-bold p-1">Diário</button>
                <button className="border-4 border-ddFour text-ddFour font-bold p-1">Semanal</button>
            </div>

            <Calender dayDungeons={dungeonsWeek[0]}/>
        </div>
    )
}

export default CalenderContent