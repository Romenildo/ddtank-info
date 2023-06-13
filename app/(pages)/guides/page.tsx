import ItemMenu from "@/app/components/itemMenu"
import Content from "../../components/template/content"


interface GuidesProps {

}

const Guides = (props: GuidesProps) =>{
    return (
        <Content>
            <div className="flex p-2 gap-4">
                <ItemMenu url="/images/menu/jewel.png" label="Joiás"/>
                <ItemMenu url="/images/menu/mont.png" label="Montarias"/>
            </div>
        </Content>
    )
}

export default Guides