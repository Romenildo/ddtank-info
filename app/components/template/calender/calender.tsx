'use client'
import CardCalender from "./cardCalender"


interface CalenderProps {
    dayDungeons: any
}

const Calender = (props: CalenderProps) =>{
    console.log(props.dayDungeons)

    const renderCards = (items: any) => {
        return(
            <>
                {items.map((item:any)=>(
                    <CardCalender isImage={item.img} alt={item.name} key={item.name} />
                ))}
            </>
        )
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-ddFive p-3">{props.dayDungeons.name}</h1>

            <div className="flex gap-4">
                <CardCalender>Tesouro</CardCalender>
                {renderCards(props.dayDungeons.teasure)}
            </div>

            <div className="w-11/12 border-t-2 border-ddFirst m-auto" />
            <div className="flex gap-4">
                <CardCalender>Multijogador</CardCalender>
                {renderCards(props.dayDungeons.multiplayer)}
            </div>

            <div className="w-11/12 border-t-2 border-ddFirst m-auto" />
            <div className="flex gap-4">
                <CardCalender>Elemental</CardCalender>
                {renderCards(props.dayDungeons.element)}
            </div>

            <div className="w-11/12 border-t-2 border-ddFirst m-auto" />
            <div className="flex gap-4">
                <CardCalender>Mundo Bogu</CardCalender>
                {renderCards(props.dayDungeons.boguWorld)}
            </div>

            <div className="w-11/12 border-t-2 border-ddFirst m-auto" />
            <div className="flex gap-4">
                <CardCalender>Colosso</CardCalender>
                {renderCards(props.dayDungeons.colossus)}
            </div>

            <div className="w-11/12 border-t-2 border-ddFirst m-auto" />
            <div className="flex gap-4">
                <CardCalender>Corredor</CardCalender>
                {renderCards(props.dayDungeons.corridor)}
            </div>
            
            

        </div>
    )
}

export default Calender