import { useState } from "react"
import "./Career/Career.css"
import CareerTimeline from "./Career/Timeline"
import { makeCareerProp, type CareerProps, type CareerType } from "./Career/CareerCard"


const roadMap: CareerProps[] = [
    makeCareerProp({
        date: "September 2025",
        image: "./assets/Epitech.png",
        name: "Epitech Paris",
        desc: "Expert in information technology",
        link: "https://www.epitech.eu/ecole-informatique-paris/",
        type: "School",
    }),
    makeCareerProp({
        date: "January 2025",
        name: "Internship",
        desc: "Professional internship",
        type: "Internship",
    }),
]


function CareerPath() {
    const [filter, setFilter] = useState<CareerType | null>(null)

    function changeFilter(newfilter : HTMLSelectElement) {
        if (newfilter.value == "ALL") {
            setFilter(null)
            return
        }
        const type = newfilter.value as CareerType
        setFilter(type)
    }
    return (
        <div className="career-path-panel">
            <select className="timeline-filter" onChange={(e) => changeFilter(e.currentTarget)}>
                <option value="ALL">All</option>
                <option value="Job">Job</option>
                <option value="School">School</option>
                <option value="Internship">Internship</option>
            </select>
            <CareerTimeline roadMap={roadMap.filter((c) => !filter || filter === c.type)} />
        </div>
    )
}

export default CareerPath
