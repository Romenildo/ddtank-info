'use client'
import Image from "next/image"
import { useState } from "react"


interface ToggleItemProps {
    name:string
    url: string
    detail: any
    porcent: string
    top: string
    
}

const ToggleItem = (props: ToggleItemProps) =>{

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex flex-col w-[800px] hover:cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
            <div className="flex border-2 w-full pr-8 pl-3 py-2 justify-between border-ddFirst">
                <div className="flex justify-center items-center gap-4">
                    <p className="relative font-bold text-[#ef4444] text-[1.3rem] ">{isOpen?("-"):("+")}</p>
                    <p className="text-ddFirst">{props.name}</p>
                </div>
                
                <div className="flex justify-center items-center gap-7 font-bold text-ddFirst">
                    <p>Top {props.top}</p>
                    <p>{props.porcent}</p>
                </div>
                
            </div>
            {isOpen && (
                <div className="border-2 border-ddTer mb-1 pb-4">
                    <Image src={props.url} alt={props.name} width={800} height={100}/>
                    <h1 className="text-ddFive font-bold px-6 text-[1.2rem]">Detalhes</h1>
                    <ul className="list-disc w-11/12 px-6 text-ddFive">
                        <li> {props.detail.effect1}</li>
                        <li> {props.detail.effect2}</li>
                        <li> {props.detail.effect3}</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ToggleItem