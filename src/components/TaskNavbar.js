import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav,NavDropdown,Form,FormControl,Button} from"react-bootstrap"
function TaskNavbar() {
    return (<Navbar variant="dark" size="lg" c="warning"bg="secondary" expand="lg" >
    <Container fluid>
      <Navbar.Brand href="#">Book Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
          variant="dark"
        >
          <Nav.Link  href="#">Home</Nav.Link>
          <Nav.Link href="#action2">Books</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">cart</NavDropdown.Item>
            <NavDropdown.Item href="#action4"></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
            contact
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            cart
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button  variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>  );
}

export default TaskNavbar;