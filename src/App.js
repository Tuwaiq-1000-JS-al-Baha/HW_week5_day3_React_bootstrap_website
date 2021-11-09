import { useState } from "react"
import Showcase from "./components/Showcase"
import Carditem from "./components/Carditem"
import NavbarLogo from "./components/NavbarLogo"

function App() {
  return (
    <>
      <NavbarLogo />
      <Showcase />
      <Carditem />
    </>
  )
}

export default App
