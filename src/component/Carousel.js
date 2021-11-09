import { Carousel, Col, Row } from "react-bootstrap"
function Carouselfuncion() {
  return (
    <Row>
      <Col>
        <Carousel className="mt-5 mx-5" fade style={{ width: "600px", height: "400px" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.sbs.com.au/movies/sites/sbs.com.au.film/files/styles/full/public/images/4/9/4929_the-best-offer-640.jpg?itok=9UdeMUO-"
              alt="First slide"
              style={{ width: "600px", height: "400px" }}
            />
            <Carousel.Caption>
              <h3>The best Offer</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/M/MV5BMjAwNzIyNTAxMl5BMl5BanBnXkFtZTcwOTUzNDMyMw@@._V1_.jpg"
              alt="Second slide"
              style={{ width: "600px", height: "400px" }}
            />

            <Carousel.Caption>
              <h3>The Prestige</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.thetab.com/blogs.dir/90/files/2019/10/fractured.jpg"
              alt="Third slide"
              style={{ width: "600px", height: "400px" }}
            />

            <Carousel.Caption>
              <h3>Fractured</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>

      <Col>
        <Carousel className="mt-5 mx-3" fade style={{ width: "600px", height: "400px" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/M/MV5BODc0MzkxOTg5N15BMl5BanBnXkFtZTcwODkzNDMyMw@@._V1_.jpg"
              alt="First slide"
              style={{ width: "600px", height: "400px" }}
            />
            <Carousel.Caption>
              <h3>The Prestige</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://bostonreview.net/sites/default/files/beautiful-mind.jpg"
              alt="Second slide"
              style={{ width: "600px", height: "400px" }}
            />

            <Carousel.Caption>
              <h3>A Beautiful Mind</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://so-s.nflximg.net/soa5/256/1140089256.jpg"
              alt="Third slide"
              style={{ width: "600px", height: "400px" }}
            />

            <Carousel.Caption>
              <h3>The best Offer</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  )
}

export default Carouselfuncion
