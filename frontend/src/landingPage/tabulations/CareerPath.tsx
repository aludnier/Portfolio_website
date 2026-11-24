import { useState } from "react"
import "./Career/Career.css"
import CareerTimeline from "./Career/Timeline"
import { makeCareerProp, type CareerProps, type CareerType } from "./Career/CareerCard"


const roadMap: CareerProps[] = [
    makeCareerProp({
        date: "September 2024 - Present",
        image: "./assets/Epitech.png",
        name: "Epitech Paris",
        desc: "Expert in information technology (Software Engineering, RNCP level 7), with project-based learning focused on autonomy and teamwork.",
        link: "https://www.epitech.eu/ecole-informatique-paris/",
        type: "Formation",
    }),
    makeCareerProp({
        date: "August 2026",
        image: "./assets/ACR.png",
        name: "ACR",
        title : "Temporary worker",
        desc: "receiving and checking pallets of parcels, and verifying that goods were compliant on arrival.",
        type: "Job",
    }),
    makeCareerProp({
        date: "September 2025 - December 2025",
        image: "./assets/Deodis.png",
        name: "Deodis",
        title: "ServiceNow developer / consultant",
        desc: "built service catalog features and automated notifications, and wrote an internal guide documenting the scripts.",
        link : "https://www.deodis.com/newsite/",
        type: "Internship",
    }),
    makeCareerProp({
        date: "October 2025",
        image: "./assets/CSA.webp",
        name: "ServiceNow CSA",
        desc: "Certified System Administrator certification, earned during my internship at Deodis.",
        link : "https://learning.servicenow.com/lxp/en/pages/now-learning-get-certified?id=amap_detail&achievement_id=208e1d77dbc27f40de3cdb85ca961987",
        type: "Formation",
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
                <option value="Formation">Formation</option>
                <option value="Internship">Internship</option>
            </select>
            <CareerTimeline roadMap={roadMap.filter((c) => !filter || filter === c.type)} />
        </div>
    )
}

export default CareerPath
