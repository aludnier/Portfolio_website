import type { ReactNode } from "react"


export type CareerType = "Formation" | "Internship" | "Job"

export type CareerProps = {
    image : string | null,
    logo : ReactNode | null,
    name : string,
    title : string | null,
    desc : string | null,
    date?: string | null,
    link : string | null,
    type : CareerType
}

const defaultCareerProps : CareerProps = {
    image : null,
    logo : null,
    name : "Unknown",
    title : null,
    desc : null,
    date : null,
    link : null,
    type : "Job"
}

export function makeCareerProp(partial : Partial<CareerProps>) : CareerProps
{
    return {...defaultCareerProps, ...partial}
}

function CareerCard({image, logo, name, title, desc, link, type} : CareerProps) {
    return (
        <div className="CareerCard" data-career-type={type}>
          {image ? <img src={image} alt=""/> : (logo ? logo : "")}
          <div className="CareerCard-details">
            {link ?
                <a href={link} target="_blank" rel="noreferrer"><u><strong>{name}</strong></u></a> :
                <strong>{name}</strong>
            }
            {title && <h3><u>{title}</u></h3>}
            {desc && <p>{desc}</p>}
          </div>
        </div>
    )
}

export default CareerCard
