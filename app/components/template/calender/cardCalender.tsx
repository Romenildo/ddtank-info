import Image from "next/image"


interface CardCalenderProps {
    children?: any
    isImage?: string
    alt?: string
    bigSize?: boolean

}

const CardCalender = (props: CardCalenderProps) =>{
    return (
        <>
            {props.isImage?(
                <Image className={`w-52 h-[5.75rem] mt-2 rounded-xl border-2 border-ddFour`} src={props?.isImage} alt={props.alt!} width={208} height={92}/>
            ):(
                <div className={`px-10 py-6  my-4 whitespace-nowrap ${!!props.bigSize?"min-w-[400px]":"min-w-[180px]"}`}>
                    <p className="text-ddFive font-bold text-center">{props.children}</p>
                </div>
                
            )}
        </>
    )
}

export default CardCalender