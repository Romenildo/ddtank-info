import { montInfos } from "@/app/api/data/guides/monts"
import InfoItem from "@/app/components/infoItem"
import ItemButton from "@/app/components/itemButton"
import Content from "@/app/components/template/content"
import Link from "next/link"


interface MontsProps {

}

const Monts = (props: MontsProps) =>{
    return (
        <Content> 
            <div className="flex items-center w-full gap-10">
                <Link href="/guides">
                    <ItemButton label="Voltar" className="p-5 m-2 "/>
                </Link>
                <h1 className="text-ddFirst text-[2rem] font-bold">Montarias</h1>
            </div>

            <ul>
                {montInfos.map((item:any)=>(
                    <li key={item.id}>
                        <InfoItem name={item.name} url={item.url} description1={item.description1} description2={item.description2}/>
                    </li>
                ))}
            </ul>
            <p className="p-2 text-[0.8rem] text-ddFive">
                Obs: As tradução foram feitas a partir de chines para portugues pelo google tradutor, As informações ainda vao passar por revisões e melhorias
            </p>
            
            
        </Content>
    )
}

export default Monts