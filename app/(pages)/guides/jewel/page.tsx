import ItemButton from "@/app/components/itemButton"
import ItemMenu from "@/app/components/itemMenu"
import Content from "@/app/components/template/content"
import Link from "next/link"

import { jewelInfos } from "@/app/api/data/guides/jewel"

interface JewelProps {

}

const Jewel = (props: JewelProps) =>{
    return (
        <Content>
            <div className="flex items-center w-full gap-10">
                <Link href="/guides">
                    <ItemButton label="Voltar" className="p-5 m-2 "/>
                </Link>
                <h1 className="text-ddFirst text-[2rem] font-bold">Informações sobre as joiás</h1>
            </div>
            
            <div className="flex flex-col items-center">
                <table className="border-collapse  border-2 border-ddFirst m-4">
                    <thead>
                        <tr className="bg-ddactive">
                            <th className="border-2 border-ddFirst p-2 text-lg" >Atributo</th>
                            <th className="border-2 border-ddFirst p-2 text-lg">Informações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jewelInfos.map((item)=>(
                            <tr key={item.id} className={`bg-opacity-40
                                                        ${item.type === "attack" && "bg-[#f59e0b]"}
                                                        ${item.type === "defense" && "bg-[#3b82f6]"}
                                                        ${item.type === "special" && "bg-[#a21caf]"} `}
                            >
                                <td className="border-2 border-ddFirst p-2 text-center">{item.name}</td>
                                <td className="border-2 border-ddFirst p-2 pl-2">{item.info}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                
        </Content>
    )
}

export default Jewel