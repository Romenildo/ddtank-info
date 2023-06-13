'use client'
import ItemButton from "@/app/components/itemButton"
import ItemMenu from "@/app/components/itemMenu"
import Content from "@/app/components/template/content"
import Link from "next/link"

import { colossusInfo } from "@/app/api/data/guides/colossus"
import Image from "next/image"

interface ColossusProps {

}

const Colossus = (props: ColossusProps) =>{
    return (
        <Content>
            <div className="flex items-center w-full gap-10">
                <Link href="/guides">
                    <ItemButton label="Voltar" className="p-5 m-2 "/>
                </Link>
                <h1 className="text-ddFirst text-[2rem] font-bold">Colosso</h1>
            </div>
            
            <div className="flex flex-col overflow-x-auto">
                <table className="border-separate  border-2 border-ddFirst  border-spacing-[4px] ">
                    <thead>
                        <tr className="bg-ddactive text-lg">
                            <th className="border-2 border-ddFirst p-2" >Imagem Inicial</th>
                            <th className="border-2 border-ddFirst">Imagem Final</th>
                            <th className="border-2 border-ddFirst">Nome</th>
                            <th className="border-2 border-ddFirst">Tipo Colosso</th>
                            <th className="border-2 border-ddFirst">Mais dano</th>
                            <th className="border-2 border-ddFirst">Menos dano</th>
                            <th className="border-2 border-ddFirst">Danos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colossusInfo.map((item)=>(
                            <tr key={item.id} className="text-ddFirst font-bold">
                                <td className="border-2 border-ddFirst p-2 text-center pl-5 min-w-[150px]">
                                    <Image src={item.imgInitial} width={120} height={100} alt={item.name}/>
                                </td>
                                <td className="border-2 border-ddFirst p-2 text-center pl-3 min-w-[150px]">
                                    <Image src={item.imgFinal} width={120} height={80} alt={item.name}/>
                                </td>
                                <td className={`border-2 border-ddFirst text-center min-w-[150px]`}>{item.name}</td>
                                <td className={`border-2 border-ddFirst text-center min-w-[150px] h-[250px] text-white bg-[${item.ColossusColor}]`}>{item.elementColossus}</td>
                                <td className={`border-2 border-ddFirst text-center min-w-[150px] text-white bg-[${item.petMColor}]`}>{item.petM}</td>
                                <td className={`border-2 border-ddFirst text-center min-w-[150px] text-white bg-[${item.petPColor}]`}>{item.petP}</td>
                                <td className="border-2 border-ddFirst p-2 text-center pl-3 min-w-[700px]">
                                    <Image src={item.damage} width={700} height={500} alt={item.name}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="p-2 text-[0.8rem] text-ddFive">
                Obs: Todos os danos foram feito com cajado de gelo, cavalo, e os pets(baiacu, coruja, dragão de terra, fada da floresta) sem upar nada entre os dias,
                somente para efeito de teste das % do dano entre os elementos. Pet principal mais upado é o baiacu.
            </p>
        </Content>
    )
}

export default Colossus