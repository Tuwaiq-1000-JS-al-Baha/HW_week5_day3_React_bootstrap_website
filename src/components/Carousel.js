import { Carousel } from "react-bootstrap"
function CarouselItem() {
  return (
    <Carousel variant="whit">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.universemagic.com/images/2014/03/6725-1-or-1395922806.webp"
          height="600px"
          width="300px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First information </h5>
          <p>
            Fish are aquatic vertebrates, and they usually have double gills and fins, and a long body covered with
            scales, and are considered cold-blooded .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.universemagic.com/images/2014/03/6725-3-or-1395922663.webp"
          height="600px"
          width="300px"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second information </h5>
          <p>
            There are many forms of fish, we may find fish with a flat shape, and twisted fish that are closer in shape
            to worms, and other shapes .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.universemagic.com/images/2014/03/6725-1-or-1395922661.webp"
          height="600px"
          width="300px"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third information</h5>
          <p>
            The term "fish" is used to refer to lampreys, sharks, coelacanths, and fin rays, but is not a specialized
            group .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselItem
