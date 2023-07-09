

interface PinnacleDisplayTableProps {
    group: any[]

}

const PinnacleDisplayTable = (props: PinnacleDisplayTableProps) =>{
    return (
        <div className={`bg-classificationTable w-[975px] h-[650px] bg-cover 
                            flex justify-center items-center gap-[580px] 
                            text-ddFirst font-bold text-xl mt-8`}>
            <div >
            {props.group.slice(0,props.group.length/2).map((item:any)=>(
                <p className="mb-28 border-[2px] p-2 w-[180px] text-center	truncate" key={item.position}>{item.name}</p>

            ))}
            </div>
            <div>
            {props.group.slice(props.group.length/2,props.group.length).map((item:any)=>(
                <p className="mb-28 border-[2px] p-2 w-[180px] text-center truncate" key={item.position}>{item.name}</p>

            ))}
            </div>
            
            
        </div>
    )
}

export default PinnacleDisplayTable