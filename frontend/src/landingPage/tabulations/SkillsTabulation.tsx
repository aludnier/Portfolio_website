import SkillCard from "./Skills/SkillCard"
import { language } from "./Skills/skills.config"
import "./Skills/SkillCard.css"

function Skills() {
    return (
        <>
          <h2>Programming Languages</h2>
          <div className="SkillCardGrid">
            {language.map((skill) => (
              <SkillCard
                key={skill.name}
                logo={skill.logo}
                name={skill.name}
                desc={skill.desc}
              />
            ))}
          </div><br/>
          <h2>Game Engine</h2>
          <div className="SkillCardGrid">
            {}
          </div>
        </>
    )
}

export default Skills
