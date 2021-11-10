import { Carousel } from "react-bootstrap"

function CarouselItem() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.ulta.com/is/image/Ulta/bs_mac_rotator1?scl=1" alt="" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.ulta.com/is/image/Ulta/bs_mac_rotator2?scl=1" alt="" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.ulta.com/is/image/Ulta/bs_mac_rotator3?scl=1" alt="" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselItem
