import type { ReactNode } from "react"

export type SkillProp = {
    logo : ReactNode,
    name : string,
    desc : string
}

function SkillCard({ logo, name, desc } : SkillProp) {

    return (
        <div className="SkillCard">
          {logo}
          <div>
            <strong>{name}</strong>
            <p>{desc}</p>
          </div>
        </div>
    )
}

export default SkillCard
