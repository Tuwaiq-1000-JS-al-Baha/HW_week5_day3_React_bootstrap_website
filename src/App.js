import { Carousel, Navbar, Card } from "react-bootstrap"
import Cards from "./components/Card"
import CarouselItem from "./components/Carousel"
import NavbarItem from "./components/Navbar"

function App() {
  return (
    <>
      <NavbarItem />
      <Cards />
      <CarouselItem />
    </>
  )
}

export default App
