import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import { Card } from "react-bootstrap"
import { Carousel } from "react-bootstrap"
function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Shopping Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <NavDropdown title="Store" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Colothes</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Kitchen</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Smart Devices</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Help
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div class="row row-cols-4">
        <div class="cols">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1633343872/N40633047A_1.jpg" />
            <Card.Body>
              <Card.Title>Gaming</Card.Title>
              <Card.Text>Video Gaming , Playstation 5 and Playing control and other gamer thing..</Card.Text>
              <Button variant="primary">Go Gmaing</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="cols">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1634462010/N31981756A_1.jpg" />
            <Card.Body>
              <Card.Title>Kitchen</Card.Title>
              <Card.Text>this Section includes Kithen Devices an services like coofee Machine.</Card.Text>
              <Button variant="primary">Go Kitchen</Button>
            </Card.Body>
          </Card>
        </div>

        <div class="cols">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1605814243/N41044064A_1.jpg" />
            <Card.Body>
              <Card.Title>Phones</Card.Title>
              <Card.Text>This section includes Many mobile phones and smart phones and Devices.</Card.Text>
              <Button variant="primary">Go Phones</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="cols">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://z.nooncdn.com/products/tr:n-t_240/v1611138575/N42284105A_1.jpg" />
            <Card.Body>
              <Card.Title>Computers</Card.Title>
              <Card.Text>
                This section includes Computer Like labtop and Computer Desktop and smaller computers.
              </Card.Text>
              <Button variant="primary">Go Computers</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
            height="600px"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>FITNESS</h3>
            <p>Fitness Devices That we need in Gym Or Home.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/jpeg;base64,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"
            alt="Second slide"
            height="600px"
          />

          <Carousel.Caption>
            <h3>WATCHES</h3>
            <p>Smart Watches and other smart watches.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg"
            alt="Third slide"
            height="600px"
          />

          <Carousel.Caption>
            <h3>READERS</h3>
            <p>Like Books and other books things.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default App
