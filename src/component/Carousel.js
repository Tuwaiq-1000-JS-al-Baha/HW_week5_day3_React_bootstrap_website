import { Carousel } from "react-bootstrap"
function CarouselGroup(props) {
  return (
    <>
      <Carousel className="d-block w-50 mx-auto mt-5">
        {props.carouselItems.map(carouselItem => (
          <Carousel.Item>
            <img height="500px" src={carouselItem.image} alt="Second slide" />
            <Carousel.Caption>
              <h3>{carouselItem.title}</h3>
              <p>{carouselItem.body}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

export default CarouselGroup
