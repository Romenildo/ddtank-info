'use client'
import Calender from "../../components/template/calender/calender"

import { dungeonsWeek } from "@/app/api/data/dungeons"
import Content from "../../components/template/content"
import { useState } from "react"
import ItemButton from "@/app/components/itemButton"

interface CalenderContentProps {

}

const CalenderContent = (props: CalenderContentProps) =>{

    const [currentDay, setCurrentDay] = useState<any>(dungeonsWeek[1])

    return (
        <Content>
            <div className="flex gap-5 mt-6 ml-4">
                
                {dungeonsWeek.map((item:any)=>(
                    <ItemButton label={item.day} key={item.id} active={currentDay.id === item.id } onClick={()=>{setCurrentDay(dungeonsWeek[item.id])}}/>
                ))}
            </div>
                        
            <Calender dayDungeons={currentDay}/>
        </Content>
    )
}

export default CalenderContent