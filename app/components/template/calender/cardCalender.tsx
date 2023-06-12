

interface CardCalenderProps {
    children?: any
    isImage?: string
    alt?: string

}

const CardCalender = (props: CardCalenderProps) =>{
    return (
        <>
            {props.isImage?(
                <img className={`w-52 h-[5.75rem] mt-2 rounded-xl border-2 border-ddFour`} src={props.isImage} alt={props.alt} />
            ):(
                <div className="px-10 py-6 min-w-[180px] my-4">
                    <p className="text-ddFive font-bold">{props.children}</p>
                </div>
                
            )}
        </>
    )
}

export default CardCalender