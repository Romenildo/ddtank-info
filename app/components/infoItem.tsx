import Image from "next/image"


interface InfoItemProps {
    url: string
    name: string
    description1: string
    description2: string
    
}

const InfoItem = (props: InfoItemProps) =>{
    return (
        <div className="flex border-2 border-ddFirst mx-5 my-2">
            <div className=" m-1 p-1 flex justify-center items-center">
                <Image className="border-4 border-ddFive" src={props.url} alt={props.name} width={300} height={100}/>
            </div>
            <div className="w-full m-2">
                <div className="border-2 border-ddFirst pl-3 text-ddFive font-bold text-[1.3em]">{props.name}</div>
                <div className="border-2 border-ddFirst mt-1 flex">
                    <div className="w-1/2 flex flex-col items-center">
                        <p className="text-[#ef4444] font-bold text-[1.2em]">Ativa</p>
                        <p className="text-[0.8rem] px-5 py-2 text-left">{props.description1}</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <p className="text-[#0ea5e9] font-bold text-[1.2em]">Passiva</p>
                        <p className="text-[0.8rem] px-5 py-2 text-left">{props.description1}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoItem