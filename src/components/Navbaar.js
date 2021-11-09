import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

function Navbaar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> Specialty Coffee </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="others" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">menu</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">about</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Barista</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbaar
