import { useState } from "react"
import TabulationBar from "./TabulationBar"
import "./Landing.css"
import "../color.css"

function LandingPage() {
    const [activeTab, setActiveTab] = useState<number>(0)

    function changeTab(tab : number) {
        setActiveTab(tab)
    }

    return (
        <main className="landing">
          <h1 className="landing_title">Hello World</h1>
          <div>
            <TabulationBar nbTabs={4} activeTab={activeTab} onTabChange={changeTab}/>
            <div className="tabs_panel">{activeTab}</div>
          </div>
        </main>
    )
}

export default LandingPage
