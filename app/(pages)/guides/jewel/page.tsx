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
            <Link href="/guides">
                <ItemButton label="Voltar" className="p-5 m-2 "/>
            </Link>
            <div className="flex flex-col items-center">
                <table className="border-collapse  border-2 border-ddFirst">
                    <thead>
                        <tr>
                            <th className="border-2 border-ddFirst" >Atributo</th>
                            <th className="border-2 border-ddFirst">Informações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jewelInfos.map((item)=>(
                            <tr key={item.id}>
                                <td className="border-2 border-ddFirst p-1 text-center">{item.name}</td>
                                <td className="border-2 border-ddFirst p-1 pl-2">{item.info}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                
        </Content>
    )
}

export default Jewel