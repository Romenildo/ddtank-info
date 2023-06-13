import Image from "next/image"


interface ItemMenuProps {
    headers: any[]
    bodyItems:  any[]
}

const ItemMenu = (props: ItemMenuProps) =>{
    return (
        <table className="border-collapse  border-2 border-ddFirst m-4">
                    <thead>
                        <tr className="bg-ddactive">
                            {props.headers.map((header:any)=>(
                                <th key={header} className="border-2 border-ddFirst p-2 text-lg" >{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {props.bodyItems.map((item)=>(
                            <tr key={item.id}>
                                <td className="border-2 border-ddFirst p-2 text-center">{item.name}</td>
                                <td className="border-2 border-ddFirst p-2 pl-2">{item.info}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    )
}

export default ItemMenu