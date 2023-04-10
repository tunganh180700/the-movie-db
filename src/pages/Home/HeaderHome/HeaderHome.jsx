import React from "react"

const HeaderHome = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="xl:w-[1250px] sm:w-full ">
        <div
          style={{
            backgroundImage:
              "url(https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/339133348_936571477539759_2570539660855913783_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=xUPsa0zWhvAAX-QlmF_&_nc_ht=scontent.fhan3-1.fna&oh=00_AfCcwZq2LaVT3iMbnMQxrkStrZ7aiEIKbiM5fXtDDXE7lg&oe=64343531)",
            height: "300px",
            padding: "60px",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
        >
          <div className="text-white">
            <p className="font-bold text-5xl">Welcome.</p>
            <p className="font-semibold text-3xl">Millions of movies, TV shows and people to discover. Explore now.</p>
          </div>
          <div className="mt-[50px] flex bg-white w-full rounded-full">
            <input
              className="block bg-white w-full rounded-full py-3 pl-5 pr-3"
              placeholder="Search for a movie, tv show, person......."
              type="text"
              name="search"
            />
            <div
              className="pl-5 pr-3 py-3 rounded-full w-[7rem] flex justify-center"
              style={{
                background: "linear-gradient(to right, rgba(30,213,169, 1) 0%, rgba(1,180,228, 1) 100%)",
              }}
            >
              <a href="#" className="text-white font-bold">
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderHome
