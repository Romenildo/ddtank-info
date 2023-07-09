'use client'
import { useState } from "react"
import Content from "../../components/template/content"
import ItemButton from "@/app/components/itemButton"
import PinnacleDisplayTable from "@/app/components/template/pinnacle/pinnacleDisplayTable"


interface MainProps {

}

const Main = (props: MainProps) =>{

    const options = [
        {id: 0, name: "Grupo A"},
        {id: 1, name: "Grupo B"},
        {id: 2, name: "Grupo C"},
        {id: 3, name: "Grupo D"},
        {id: 4, name: "Final"},
    ]
    const [currentSelected, setCurrentSelected] = useState<any>(options[0])
    const [inputJson, setinputJson] = useState('');
    
    const [currentTable, setCurrentTable] = useState<any[]>([])
    const [currentGroup, setCurrentGroup] = useState<any[]>([])
    
    const [error, setError] = useState(false);
    const handleChange = (event:any) => {
        setinputJson(event.target.value);
    };

    function generateTable(){
        
        const json = inputJson
        let obj
        try {
            obj = JSON.parse(json);
            if(obj.length < 32){
                setError(true)
                return
            }
            setError(false)
            setCurrentTable(obj)
            changeTable(0)
        } catch (error) {
            setError(true)
        }
        
    }

    function changeTable(id: number){

        let positions:any[] = []
        switch (id) {
            case 0://grupo A
                positions=[1,5,9,13,17,21,25,29]
            break;
            case 1://grupo B
                positions=[2,6,10,14,18,22,26,30]
            break;
            case 2://grupo C
                positions=[3,7,11,15,19,23,27,31]
            break;
            case 3://grupo D
                positions=[4,8,12,16,20,24,28,32]
            break;
        }
        let group = currentTable.filter((item:any)=>positions.includes(item.position))

        if(id==4){//finais
            group = [{position:1, name:"Grupo A"},{position:2, name:"Grupo A"},{position:3, name:"Grupo C"},{position:4, name:"Grupo C"},
                     {position:5, name:"Grupo B"},{position:6, name:"Grupo B"},{position:7, name:"Grupo D"},{position:8, name:"Grupo D"}]
        }
        setCurrentGroup(group)
        setCurrentSelected(options[id])

    }

    return (
        <Content>
            <div className="flex justify-center w-full m-2 gap-5">
                <input type="text" className="bg-ddTer h-[40px] w-[400px] p-2 pl-4 text-ddFive placeholder-ddFive" placeholder="Cole o JSON" onChange={handleChange}/>
                <button className="bg-ddactive w-[100px] text-white font-bold hover:bg-ddTer hover:text-ddactive" onClick={()=> generateTable()}>Adicionar</button>
                <button className="bg-ddFour w-[80px] text-white font-bold hover:bg-ddFive">Copiar</button>
            </div>

            <div className="flex gap-5 mt-6 ml-4 w-full justify-center">
                
                {options.map((item:any)=>(
                    <ItemButton  label={item.name} key={item.id} active={currentSelected.id === item.id } onClick={()=>{changeTable(item.id)}} className={"min-w-[110px]"}/>
                ))}
            </div>
            {error ? (
                <div className="text-2xl text-red font-bold p-5">Formato do Json Inválido.</div>
            ):(
                <div>
                    {currentGroup.length > 0 && (
                        <PinnacleDisplayTable group={currentGroup}></PinnacleDisplayTable>
                    )}
                </div>
            )

            }
        </Content>
    )
}

export default Main