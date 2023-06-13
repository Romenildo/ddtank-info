import ItemMenu from "@/app/components/itemMenu"
import Content from "../../components/template/content"
import Link from "next/link"


interface GuidesProps {

}

const Guides = (props: GuidesProps) =>{
    return (
        <Content>
            <div className="flex p-2 gap-4">
                <Link href="/guides/jewel">
                    <ItemMenu url="/images/menu/jewel.png" label="Joiás"/>
                </Link>
                <Link href="/guides/monts">
                    <ItemMenu url="/images/menu/mont.png" label="Montarias"/>
                </Link>
                <Link href="/guides/weapon">
                    <ItemMenu url="/images/menu/weapon.png" label="Armas"/>
                </Link>
                <Link href="/guides/pets">
                    <ItemMenu url="/images/menu/pets.png" label="Mascotes"/>
                </Link>
                <Link href="/guides/array">
                    <ItemMenu url="/images/menu/array.png" label="Array"/>
                </Link>
                
                
            </div>
        </Content>
    )
}

export default Guides