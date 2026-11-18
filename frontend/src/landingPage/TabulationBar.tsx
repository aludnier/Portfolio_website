import type { ReactNode } from "react"

export type TabContentProp = {
    name : string,
    content : ReactNode
}

type TabsProps = {
    TabsContent : TabContentProp[]
    activeTab : number
    onTabChange : (tab : number) => void
}

function TabulationBar({ TabsContent, activeTab, onTabChange } : TabsProps ) {
    let tabs = []

    for (let index = 0; index < TabsContent.length; index++) {
        tabs.push(
            <button key={index} className={`tab-button${activeTab === index ? " tab-button--active" : ""}`}
                onClick={() => onTabChange(index)}>
                {TabsContent[index].name}
            </button>
        )
    }

    return (
        <div className="tabs_list">
            {tabs}
        </div>
    )
}

export default TabulationBar
