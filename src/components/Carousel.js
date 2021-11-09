import { Carousel } from "react-bootstrap"

function CarouselItem() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.freecreatives.com/wp-content/uploads/2016/04/Spring-Nature-Wallpaper.jpg"
          alt="Spring"
        />
        <Carousel.Caption>
          <h3>Spring beauty</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5329563.jpg&f=1&nofb=1"
          alt="Summer season"
        />

        <Carousel.Caption>
          <h3>Summer vibes</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F178503-leaves-trees-forest-autumn-walk-hdr-nature-river-water-reflection-sky-bench-view-leaves-trees-forest-fall-walk-nature-river-water-reflection-sky-bench-view-2.jpg&f=1&nofb=1"
          alt="Fall season"
        />

        <Carousel.Caption>
          <h3>Fall season</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselItem