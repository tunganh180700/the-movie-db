import React from "react"
import Header from "./component/UI/Header/Header"
import Footer from "./component/UI/Footer/Footer"
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <div className="sm:w-full sm:h-full">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
