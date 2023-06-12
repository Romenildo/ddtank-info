import CardCalender from "./cardCalender"


interface CalenderProps {

}

const Calender = (props: CalenderProps) =>{
    return (
        <div>
            <h1 className="text-2xl font-bold text-ddFive p-3">Segunda-Feira</h1>

            <div className="flex gap-4">
                <CardCalender>Tesouro</CardCalender>
                <CardCalender isImage="images/dungeons/teasure/ancient.png" alt="evilMage"/> 
                <CardCalender isImage="images/dungeons/teasure/future.png" alt="evilMage"/> 
            </div>

            <div className="w-11/12 border-t-2 border-ddFirst m-auto" />
            <div className="flex gap-4">
                <CardCalender>Multijogador</CardCalender>
                <CardCalender isImage="images/dungeons/multiplayer/pirateCamp.png" alt="evilMage"/> 
            </div>

            <div className="w-11/12 border-t-2 border-ddFirst m-auto" />
            <div className="flex gap-4">
                <CardCalender>Elemental</CardCalender>
                <CardCalender isImage="images/dungeons/elemental/earth.png" alt="evilMage"/>  
            </div>

            <div className="w-11/12 border-t-2 border-ddFirst m-auto" />
            <div className="flex gap-4">
                <CardCalender>Mundo Bogu</CardCalender>
                <CardCalender isImage="images/dungeons/boguWorld/royalGuard.png" alt="evilMage"/> 
            </div>

            <div className="w-11/12 border-t-2 border-ddFirst m-auto" />
            <div className="flex gap-4">
                <CardCalender>Colosso</CardCalender>
                <CardCalender>image</CardCalender> 
            </div>

            <div className="w-11/12 border-t-2 border-ddFirst m-auto" />
            <div className="flex gap-4">
                <CardCalender>Corredor</CardCalender>
                <CardCalender isImage="images/dungeons/corridor/evilMage.png" alt="evilMage"/> 
            </div>
            
            

        </div>
    )
}

export default Calender