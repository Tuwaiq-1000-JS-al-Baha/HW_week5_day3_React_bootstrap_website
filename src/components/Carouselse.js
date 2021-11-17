import { Carousel } from "react-bootstrap"

function Carouselse(props) {
  return (
    <>
      <Carousel style={{ width: "900px", height: "900px" }}>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto mt-5"
            height="500px"
            src="https://images.pexels.com/photos/2870353/pexels-photo-2870353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto mt-5"
            height="500px"
            src="https://images.pexels.com/photos/96428/pexels-photo-96428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}
export default Carouselse
