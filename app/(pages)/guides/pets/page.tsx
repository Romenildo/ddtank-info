import ItemMenu from "@/app/components/itemMenu"
import Content from "@/app/components/template/content"


interface PetsProps {

}

const Pets = (props: PetsProps) =>{
    return (
        <Content>
            <div className="flex p-2">
                Pets
            </div>
        </Content>
    )
}

export default Pets