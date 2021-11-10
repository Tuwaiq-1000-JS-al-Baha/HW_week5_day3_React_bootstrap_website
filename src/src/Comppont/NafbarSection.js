import React from "react"
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

function NafbarSection() {
  return (
    <div className="mb-5">
    <Navbar bg="light" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2"> Tutorial</Nav.Link>
            <NavDropdown title="" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Node</NavDropdown.Item>
              <NavDropdown.Item href="#action4">jsx</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">component</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NafbarSection
