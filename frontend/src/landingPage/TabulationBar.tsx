

type TabsProps = {
    nbTabs : number
    activeTab : number
    onTabChange : (tab : number) => void
}

function TabulationBar({ nbTabs, activeTab, onTabChange } : TabsProps ) {
    let tabs = []

    for (let index = 0; index < nbTabs; index++) {
        tabs.push(
            <button key={index} className={`tab-button${activeTab === index ? " tab-button--active" : ""}`}
                onClick={() => onTabChange(index)}>
                Tabs {index + 1}
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
