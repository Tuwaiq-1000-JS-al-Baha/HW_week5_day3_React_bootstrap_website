import { Navbar, Container } from "react-bootstrap"

function Navbaritem() {
  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Welcome to My Coffee shop</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbaritem
