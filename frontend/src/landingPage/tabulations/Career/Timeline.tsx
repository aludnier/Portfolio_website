import CareerCard, { makeCareerProp, type CareerProps } from "./CareerCard"

type TimelineProps = {
    roadMap : CareerProps[]
}

function CareerTimeline({ roadMap } : TimelineProps) {
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
