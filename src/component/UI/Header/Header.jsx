import React from "react"

const Header = () => {
  return (
    <div className="bg-blue-950 h-[64px] flex justify-center items-center">
      <div className="flex justify-between w-[60%] items-center">
        <div className="flex gap-x-7">
          <a href="#">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              width="200"
              height="30"
            />
          </a>
          <div className="text-white flex gap-x-5 text-base font-semibold">
            <a href="#">Movies</a>
            <a href="#">TV Shows</a>
            <a href="#">People</a>
            <a href="#">More</a>
          </div>
        </div>
        <div className="text-white flex gap-x-5 text-base font-semibold justify-center items-center">
          <a href="#">
            <img
              src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
              width="30"
              height="30"
            />
          </a>
          <a href="#" className="border-2 p-1 rounded">
            EN
          </a>
          <a href="#">Login</a>
          <a href="#">Join TMDB</a>
          <div>
            <img
              src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
              width="40"
              height="30"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
