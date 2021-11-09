import { Carousel } from "react-bootstrap"

function Carouselitem() {
  return (
    <>
      <Carousel height="600px">
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://mo.arbcinema.com/wp-content/uploads/%D9%81%D9%8A%D9%84%D9%85-%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D8%A9-%D9%85%D8%B9-%D8%A7%D9%84%D8%B9%D8%A7%D8%A6%D9%84%D8%A9-2020-%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%85%D8%AA%D8%B1%D8%AC%D9%85.jpg"
            alt="First slide"
            height="600px"
          />
          <Carousel.Caption>
            <h3> Adventure with the Family Movie</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-2"
            src="https://mo.arbcinema.com/wp-content/uploads/%D9%81%D9%8A%D9%84%D9%85-%D8%A7%D9%84%D8%A7%D9%82%D8%B2%D8%A7%D9%85-%D8%A7%D9%84%D8%B3%D8%A8%D8%B9-%D9%88-%D8%A7%D9%84%D8%AD%D8%B0%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%AD%D9%85%D8%B1-2020-%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%85%D8%AA%D8%B1%D8%AC%D9%85.jpg"
            alt="Second slide"
            height="600px"
          />

          <Carousel.Caption>
            <h3>The movie Seven Dwarfs and the Red Shoes</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-2"
            src="https://mo.arbcinema.com/wp-content/uploads/%D9%81%D9%8A%D9%84%D9%85-%D8%A7%D9%84%D9%83%D9%84%D8%A8-%D9%88%D8%A7%D9%84%D9%82%D8%B7-%D8%A7%D9%84%D8%AE%D8%A7%D8%B1%D9%82%D9%8A%D9%86-2020-%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%85%D8%AA%D8%B1%D8%AC%D9%85.jpg"
            alt="Third slide"
            height="600px"
          />

          <Carousel.Caption>
            <h3>The cat and dog superhero movie</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Carouselitem
