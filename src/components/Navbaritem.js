import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from "react-bootstrap"

function Navbaritme() {
  return (
    <>
      <Navbar bg="secondary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>

              <Nav.Link href="#" disabled>
                Rate
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="secondary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbaritme
