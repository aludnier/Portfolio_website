import "./Career/Career.css"
import type { CareerProps } from "./Career/CareerCard"
import CareerCard, { makeCareerProp } from "./Career/CareerCard"
import CareerTimeline from "./Career/Timeline"

function CareerPath() {
    const career : CareerProps = makeCareerProp({name : "Epitech Paris", link : "https://www.epitech.eu/ecole-informatique-paris/", type : "Job"})

    return (
        <div>
            <CareerTimeline></CareerTimeline>
            <CareerCard
                image={career.image}
                logo={career.logo}
                name={career.name}
                desc={career.desc}
                link={career.link}
                type={career.type}
            />
        </div>
    )
}

export default CareerPath
