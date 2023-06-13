'use client'
import Calender from "../../components/template/calender/calender"

import { dungeonsWeek } from "@/app/api/data/dungeons"
import Content from "../../components/template/content"
import { useState } from "react"

interface CalenderContentProps {

}

const CalenderContent = (props: CalenderContentProps) =>{

    const [currentDay, setCurrentDay] = useState<any>(dungeonsWeek[1])

    return (
        <Content>
            <div className="flex gap-5 mt-6 ml-4">
                
                {dungeonsWeek.map((item:any)=>(
                    <button className={`border-4 border-ddFour text-ddFour font-bold p-1 hover:bg-ddFirst hover:text-ddSec hover:border-none hover:cursor-pointer
                        ${currentDay.id === item.id && "bg-ddFirst text-ddSec border-none"}
                    `}
                        onClick={()=>{setCurrentDay(dungeonsWeek[item.id])}}
                        key={item.id}
                    >{item.day}</button>
                ))}
            </div>
                        
            <Calender dayDungeons={currentDay}/>
        </Content>
    )
}

export default CalenderContent