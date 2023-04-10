import React from "react"

const Header = () => {
  return (
    <div className="bg-blue-950 h-[64px] flex justify-center items-center w-full">
      <div className="flex justify-between xl:w-[1150px] items-center sm:w-[90%]">
        <div className="flex gap-x-7">
          <div className="sm:w-[150px] sm:h-[30px]">
            <a href="#">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                className="h-full w-full"
              />
            </a>
          </div>
          <div className="text-white flex gap-x-5 text-base font-semibold justify-center items-center">
            <div>
              <a href="#">Movies</a>
            </div>
            <div className="whitespace-nowrap">
              <a href="#">TV Shows</a>
            </div>
            <div>
              <a href="#">People</a>
            </div>
            <div>
              <a href="#">More</a>
            </div>
          </div>
        </div>
        <div className="text-white flex gap-x-5 text-base font-semibold justify-center items-center">
          <div className="sm:w-[30px] sm:h-[30px]">
            <a href="#">
              <img
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
                className="w-full h-full"
              />
            </a>
          </div>
          <a href="#" className="border-2 p-1 rounded">
            EN
          </a>
          <div>
            <a href="#">Login</a>
          </div>
          <div className="whitespace-nowrap">
            <a href="#">Join TMDB</a>
          </div>
          <div className="sm:w-[40px] sm:h-[30px]">
            <img
              src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
