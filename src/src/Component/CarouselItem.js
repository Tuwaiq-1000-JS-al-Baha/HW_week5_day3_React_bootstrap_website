import { Carousel } from "react-bootstrap"

function CarouselItem() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://osm.etsi.org/wikipub/images/thumb/d/db/Books.jpg/1200px-Books.jpg "
            width="300"
            height="500"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Books_HD_%288314929977%29.jpg"
            width="300"
            height="500"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/7/79/English-English_dictionaries_and_thesaurus_books.JPG"
            width="300"
            height="500"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselItem
