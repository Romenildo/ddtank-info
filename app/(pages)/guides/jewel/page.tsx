import ItemButton from "@/app/components/itemButton"
import ItemMenu from "@/app/components/itemMenu"
import Content from "@/app/components/template/content"
import Link from "next/link"


interface JewelProps {

}

const Jewel = (props: JewelProps) =>{
    return (
        <Content>
            <Link href="/guides">
                <ItemButton label="Voltar" className="p-5 m-2 "/>
            </Link>
            <div className="flex flex-col">
                conteudo
            </div>
                
        </Content>
    )
}

export default Jewel