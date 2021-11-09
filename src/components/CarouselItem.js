import { Carousel } from "react-bootstrap"

function CarouselItem(props) {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://theabsolutemag.com/wp-content/uploads/2015/06/tumblr_myzuyvNikJ1rjrufmo3_1280-976x526.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Read a book!</h3>
            <p>Try to see more and know.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://valenciaplaza.com/public/Image/2015/12/CHIRBES-0298-FOTO.JESUSCISCAR_NoticiaAmpliada.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Read a book!</h3>
            <p>Try to see more and know.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://www.graficadelparteolla.com/cnt/site/edizioni_grafica_parteolla/gallery/casa_editrice_02.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Read a book!</h3>
            <p>Try to see more and know.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselItem
