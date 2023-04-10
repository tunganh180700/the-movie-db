import React from "react"

const TabInHomePage = (tabs) => {
  const changeTab = (e, btn) => {
    var i, tabcontent, tablinks
    tablinks = document.getElementsByClassName("tablinks")
    tabcontent = document.getElementsByClassName(tabs.title)
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
    }
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    document.getElementById(btn).style.display = "block"
    e.currentTarget.className += " active"
  }
  return (
    <div className="border-box px-[60px] py-3">
      <div className="flex box-border w-full items-baseline">
        <h3 className="font-semibold text-2xl">{tabs.title}</h3>

        {tabs.tabs?.map((button) => (
          <div className="flex flex-wrap -mb-px text-sm font-medium text-center border rounded-full" key={button.name}>
            <button
              className="tablinks rounded-full border w-[100px] text-lg whitespace-nowrap active:bg-red-400 duration-300"
              onClick={(e) => changeTab(e, button.name)}
            >
              {button.name}
            </button>
          </div>
        ))}
      </div>
      {tabs.tabs?.map((button, index) => {
        return index === 0 ? (
          <div
            id={button.name}
            className={tabs.title}
            style={{ display: "block", padding: "6px 12px", borderTop: "none" }}
          >
            <div>{button.content}</div>
          </div>
        ) : (
          <div
            id={button.name}
            className={tabs.title}
            style={{ display: "none", padding: "6px 12px", borderTop: "none" }}
          >
            <div>{button.content}</div>
          </div>
        )
      })}
    </div>
  )
}

export default TabInHomePage
