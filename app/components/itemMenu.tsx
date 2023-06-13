import Image from "next/image"


interface ItemMenuProps {
    url: string
    label: string
}

const ItemMenu = (props: ItemMenuProps) =>{
    return (
        <div className="flex flex-col justify-center items-center min-h-[220px] bg-ddFour border-2 border-ddFive  text-ddSec font-bold hover:scale-105 hover:bg-ddactive hover:cursor-pointer p-10 ">
            <div className="bg-ddFirst rounded-full pl-[4px]">
                <Image src={props.url} alt={props.label} width={100} height={100}/>

            </div>
            <p>{props.label}</p>
        </div>
    )
}

export default ItemMenu