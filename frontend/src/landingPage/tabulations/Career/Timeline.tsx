import CareerCard, { makeCareerProp, type CareerProps } from "./CareerCard"

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

function CareerTimeline() {
    return (
        <div className="timeline">
            {roadMap.map((career, index) => (
                <div className="timeline-row" key={`${career.name}-${career.date ?? index}`}>
                    <div className="timeline-header">
                        {career.date && (
                            <time className="timeline-date">{career.date}</time>
                        )}
                        <span
                            className={`timeline-indicator timeline-indicator--${career.type.toLowerCase()}`}
                            aria-hidden="true"
                        />
                        {index < roadMap.length - 1 && (
                            <span className="timeline-separator" aria-hidden="true" />
                        )}
                    </div>
                    <div className="timeline-content">
                        <CareerCard
                            image={career.image}
                            logo={career.logo}
                            name={career.name}
                            desc={career.desc}
                            date={career.date}
                            link={career.link}
                            type={career.type}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CareerTimeline
