import React from "react"
import TabInHomePage from "../Tab/TabInHomePage"
import CardMovie from "../CardMovie/CardMovie"

const Trending = () => {
  const tabsTrending = [
    {
      name: "Today",
      content: <CardMovie />,
    },
    {
      name: "This week",
      content: " <TabVideo />",
    },
  ]

  return (
    <div className="flex justify-center items-start">
      <div
        className="xl:w-[1250px] sm:w-full"
        style={{
          backgroundImage:
            "url( https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)",
        }}
      >
        <TabInHomePage tabs={tabsTrending} title="Trending" />
      </div>
    </div>
  )
}

export default Trending
