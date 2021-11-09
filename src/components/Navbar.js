import {Navbar , Container, Nav} from 'react-bootstrap'
function NavigationBar() {
    return ( 
        <>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Nature Website</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#Gallery">Gallery</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </>
     );
}

export default NavigationBar;