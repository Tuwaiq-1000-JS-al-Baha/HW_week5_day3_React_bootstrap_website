import { Carousel } from "react-bootstrap"

function CarouselItem() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.al-ain.com/images/2021/2/13/154-153653-improving-memory-apples-brain_700x400.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Apple</h3>
            <p>
              The apple is a pome (fleshy) fruit, in which the ripened ovary and surrounding tissue both become fleshy
              and edible.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wikiimg.tojsiabtv.com/wikipedia/commons/9/90/Hapus_Mango.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mango</h3>
            <p>
              The mango fruit is roughly oval in shape, with uneven sides. The fruit is a drupe, with an outer flesh
              surrounding a stone.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/200px-Ambersweet_oranges.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Orange</h3>
            <p>
              The mango fruit is roughly oval in shape, with uneven sides. The fruit is a drupe, with an outer flesh
              surrounding a stone.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
export default CarouselItem
