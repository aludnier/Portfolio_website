import { useState } from "react"
import TabulationBar, { type TabContentProp } from "./TabulationBar"
import "./Landing.css"
import "../color.css"
import CareerPath from "./tabulations/CareerPath"
import ProjectsList from "./tabulations/ProjectLists"
import Skills from "./tabulations/SkillsTabulation"


function LandingPage() {
    const [activeTab, setActiveTab] = useState<number>(0)
    const TabsContents : TabContentProp[] = [
        {name: "Skills and Techno" , content: <Skills/>},
        {name: "Projects", content: <ProjectsList/>},
        {name: "Career Path", content: <CareerPath/>}
    ]

    function changeTab(tab : number) {
        setActiveTab(tab)
    }

    return (
        <main className="landing">
          <h1 className="landing_title">Ayrton</h1>
          <h2 className="landing_subtitle">Ludger Crosnier</h2>
          <div>
            <TabulationBar TabsContent={TabsContents} activeTab={activeTab} onTabChange={changeTab}/>
            <div className="tabs_panel">{
                TabsContents[activeTab].content
            }</div>
          </div>
        </main>
    )
}

export default LandingPage
