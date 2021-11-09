import Cards from "./components/Cards"

import "./App.css"
import NavbarItem from "./components/NavbarItem"
import Carousels from "./components/Carousels"

function App() {
  return (
    <>
      <div className="films">
        <div>
          <NavbarItem />
        </div>
        <div className="title">
          <h1>Movies</h1>
          <h4>
            Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere
            in-between. So many titles, so much to experience.
          </h4>
        </div>
        <div className="cards">
          <Cards />
        </div>
        <div className="carousels">
          <Carousels />
        </div>
      </div>
    </>
  )
}

export default App
