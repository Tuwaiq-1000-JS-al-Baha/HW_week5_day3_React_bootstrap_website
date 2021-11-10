import {Navbar , Container, Nav} from 'react-bootstrap'
function NavigationBar() {
    return ( 
        <>
     <Navbar bg="black" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
    <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4a%2Fdd%2Ffe%2F4addfec42b8469dbc19a7f594dab6c3c.jpg&f=1&nofb=1"
        width="30"
        height="30"
        className="d-inline-block align-top"
        />{' '}
        Nature Website
      
      </Navbar.Brand>
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