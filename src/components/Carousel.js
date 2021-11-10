import { Carousel } from "react-bootstrap"


function Carouel1() {
  return (
    <Carousel>
      <Carousel.Item class="Carousel">
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejJka1VKfYPmTDH3DAsyqPYP2p5_5yaV-sA&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="Carousel">
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejJka1VKfYPmTDH3DAsyqPYP2p5_5yaV-sA&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item class="Carousel">
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejJka1VKfYPmTDH3DAsyqPYP2p5_5yaV-sA&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carouel1
