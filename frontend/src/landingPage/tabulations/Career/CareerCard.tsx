import type { ReactNode } from "react"


type CareerType = "School" | "Internship" | "Job"

export type CareerProps = {
    image : string | null,
    logo : ReactNode | null,
    name : string,
    desc : string | null,
    date?: string | null,
    link : string | null,
    type : CareerType
}

const defaultCareerProps : CareerProps = {
    image : null,
    logo : null,
    name : "Unknown",
    desc : null,
    date : null,
    link : null,
    type : "Job"
}

export function makeCareerProp(partial : Partial<CareerProps>) : CareerProps
{
    return {...defaultCareerProps, ...partial}
}

function CareerCard({image, logo, name, desc, link, type} : CareerProps) {
    return (
        <div className="CareerCard" data-career-type={type}>
          {image ? <img src={image} alt=""/> : (logo ? logo : "")}
          <a href={(link ? link : "")} target="blank"><strong>{name}</strong></a>
          {desc ? <p>{desc}</p> : ""}
        </div>
    )
}

export default CareerCard
