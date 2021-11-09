import { Carousel } from "react-bootstrap"

function Carouselss(props) {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/98/33/e2/9833e22c4361d1185913336f82046a43.jpg"
            height="400px"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Coffee is a hug in a mug</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/b1/e0/5a/b1e05a3d01602d5a8ebaf406fe2dad6e.jpg"
            height="400px"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>I have measured out my life with coffee spoons.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/20/d0/d6/20d0d610a936041c4d6fa5e9223735a0.jpg"
            height="400px"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Coffee helps me maintain my “never killed anyone streak”</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Carouselss
