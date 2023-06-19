

import { equipInfos } from "@/app/api/data/guides/equips"
import ItemButton from "@/app/components/itemButton"
import Content from "@/app/components/template/content"
import ToggleItem from "@/app/components/toggleItem"
import Link from "next/link"


interface EquipProps {

}

const Equip = (props: EquipProps) =>{

    
    return (
        <Content>
            <div className="flex items-center w-full gap-10">
                <Link href="/guides">
                    <ItemButton label="Voltar" className="p-5 m-2 "/>
                </Link>
                <h1 className="text-ddFirst text-[2rem] font-bold">Equipamentos</h1>
            </div>
            
            <p>Lista dos conjunto de equipamentos mais utilizados atualmente</p>

            <ul className="flex flex-col items-center">
                {equipInfos.map((item:any)=>(
                    <li key={item.id} className="p-[.5px]">
                        <ToggleItem name={item.name} url={item.url} detail={item.detail} porcent={item.porcent} top={item.id+1}/>
                    </li>
                ))}
            </ul>

            
            <p className="p-2 text-[0.8rem] text-ddFive">
                Obs: Os dados são retirados dos top 50 global, dos servidores AS e NA. A tabela não está informando qual melhor conjunto e sim os mais utilizados no jogo atualmente(19/06/2023). 
                Cada jogador tem seu proprio modo de jogo pode montar o conjunto que mais combinar com seu estilo de jogo.
            </p>
        </Content>
    )
}

export default Equip