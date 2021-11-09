import { Carousel } from "react-bootstrap"

function Carsoulitem() {
  return (
    <>
      <Carousel fade mx-2 style={{ width: "40rem" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3326355/pexels-photo-3326355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>MASHAEL</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/236818/pexels-photo-236818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>MASHAEL</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1005649/pexels-photo-1005649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>MASHAEL</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Carsoulitem
