import { useLayoutEffect, useRef } from "react"
import CareerCard, { type CareerProps } from "./CareerCard"

type TimelineProps = {
    roadMap : CareerProps[]
}

function CareerTimeline({ roadMap } : TimelineProps) {
    const timelineRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const timeline = timelineRef.current
        if (!timeline) return

        const updateSeparators = () => {
            const rows = Array.from(
                timeline.querySelectorAll<HTMLElement>(".timeline-row")
            )

            rows.forEach((row, index) => {
                const nextRow = rows[index + 1]
                const separator = row.querySelector<HTMLElement>(".timeline-separator")
                const currentDot = row.querySelector<HTMLElement>(".timeline-indicator")
                const nextDot = nextRow?.querySelector<HTMLElement>(".timeline-indicator")

                if (!separator || !currentDot || !nextDot) return

                const currentCenter =
                    currentDot.getBoundingClientRect().top + currentDot.offsetHeight / 2
                const nextCenter =
                    nextDot.getBoundingClientRect().top + nextDot.offsetHeight / 2

                separator.style.height = `${nextCenter - currentCenter}px`
            })
        }

        updateSeparators()

        const observer = new ResizeObserver(updateSeparators)
        timeline.querySelectorAll(".timeline-row").forEach((row) => observer.observe(row))

        return () => observer.disconnect()
    }, [roadMap])

    return (
        <div className="timeline" ref={timelineRef}>
            {roadMap.map((career, index) => (
                <div className="timeline-row" key={`${career.name}-${career.date ?? index}`}>
                    <div className="timeline-header">
                        {career.date && (
                            <time className="timeline-date"><strong>{career.date}</strong></time>
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
                            title={career.title}
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
