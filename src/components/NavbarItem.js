import { Navbar, Container, Nav, Button } from "react-bootstrap"
function NavbarItem() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-between">
        <Navbar.Brand href="#home">Netflix</Navbar.Brand>
        <Nav className="me-auto ">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Button variant="danger" className="me-2 " size="sm">
          JOIN NOW
        </Button>
        <Button variant="outline-light" className="me-2" size="sm">
          SIGN IN
        </Button>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
