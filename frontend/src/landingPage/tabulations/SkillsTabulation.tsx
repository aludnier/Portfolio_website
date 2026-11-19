import SkillCard, { type SkillProp } from "./Skills/SkillCard"
import { languages, frameworks, engines } from "./Skills/skills.config"
import "./Skills/SkillCard.css"

function Skills() {
    return (
        <>
          <h2>Programming Languages</h2>
          <div className="SkillCardGrid">
            {languages.map((skill : SkillProp) => (
              <SkillCard
                key={skill.name}
                logo={skill.logo}
                name={skill.name}
                desc={skill.desc}
              />
            ))}
          </div><br/>
          <h2>Frameworks</h2>
          <div className="SkillCardGrid">
            {frameworks.map((skill : SkillProp) => (
              <SkillCard
                key={skill.name}
                logo={skill.logo}
                name={skill.name}
                desc={skill.desc}
              />
            ))}
          </div><br/>
          <h2>Engines</h2>
          <div className="SkillCardGrid">
            {engines.map((skill : SkillProp) => (
              <SkillCard
                key={skill.name}
                logo={skill.logo}
                name={skill.name}
                desc={skill.desc}
              />
            ))}
          </div>
        </>
    )
}

export default Skills
