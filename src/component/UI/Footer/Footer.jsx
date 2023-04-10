import React from "react"

const Footer = () => {
  return (
    <div className="w-full bg-blue-950 flex justify-center items-center">
      <div className="flex items-end gap-x-10 w-[1000px] pb-20 pt-14">
        <div className="w-[200px]">
          <div className="flex justify-end pb-14">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              width="130"
            />
          </div>
          <div
            className="font-bold bg-white flex justify-center items-center rounded-md whitespace-nowrap"
            style={{ color: "#ADD8E6" }}
          >
            <a href="#" className="sm:p-2 p-2">
              JOIN THE COMUNITY
            </a>
          </div>
        </div>
        <div className="text-white flex gap-x-10 whitespace-nowrap">
          <div>
            <h3 className="font-bold">THE BASICS</h3>
            <div>
              <a href="#">About TMDB</a>
            </div>
            <div>
              <a href="#">Contact Us</a>
            </div>
            <div>
              <a href="#">Support Forums</a>
            </div>
            <div>
              <a href="#">API</a>
            </div>
            <div>
              <a href="#">System Status</a>
            </div>
          </div>
          <div className="text-base">
            <h3 className="font-bold">GET INVOLVED</h3>
            <div>
              <a href="#">Contribution Bible</a>
            </div>
            <div>
              <a href="#">Add New Movie</a>
            </div>
            <div>
              <a href="#">Add New TV Show</a>
            </div>
          </div>
          <div className="">
            <h3 className="font-bold">COMMUNITY</h3>
            <div>
              <a href="#">Guidelines</a>
            </div>
            <div>
              <a href="#">Discussions</a>
            </div>
            <div>
              <a href="#">Leaderboard</a>
            </div>
            <div>
              <a href="#">Twitter</a>
            </div>
          </div>
          <div className="">
            <h3 className="font-bold">LEGAL</h3>
            <div>
              <a href="#">Terms of Use</a>
            </div>
            <div>
              <a href="#">API Terms of Use</a>
            </div>
            <div>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
