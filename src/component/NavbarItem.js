import React from "react"
import { Navbar , Container , Nav } from "react-bootstrap"
function NavbarItem() {
  return (
    <>
    <Navbar bg="light" variant="light">
    <Container class= "text">
    <Navbar.Brand href="#home"> RAHAF'S WINTER COLICTION</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <h5> WELCOME TO WINTER COLICTION !! </h5>

    </Container>
  </Navbar>
    </>
  )
}

export default NavbarItem
