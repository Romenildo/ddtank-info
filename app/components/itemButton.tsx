import Image from "next/image"


interface ItemButtonProps {
    label: string
    active?: boolean
    key?: any
    onClick?: () => any
    className?: any
}

const ItemButton = (props: ItemButtonProps) =>{
    return (
        <button className={`border-4 border-ddFour text-ddFour font-bold p-1 hover:bg-ddFirst hover:text-ddSec hover:border-ddFirst hover:cursor-pointer
                        ${props.active&& "bg-ddFirst text-ddSec border-none"}
                        ${props.className}
                    `}
                        onClick={props.onClick}
                        key={props.key}
                    >{props.label}</button>
    )
}

export default ItemButton