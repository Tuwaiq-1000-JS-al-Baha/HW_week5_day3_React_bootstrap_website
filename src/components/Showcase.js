import { Carousel, Col } from "react-bootstrap"

function Showcase() {
  return (
    <Carousel variant="light">
      <Carousel.Item>
        <Col className="d-flex justify-content-center">
          <img
            className="d-block w-10"
            src="https://valentino-cdn.thron.com/delivery/public/image/valentino/6545e364-3ef3-48f6-8ae6-1ac545a0bf78/VA14I6D/std/828x0/hp_mobile_w_act-collection-v2.jpg?quality=80"
            height="600"
            alt="First slide"
          />
          <img
            className="d-block w-10"
            src="https://valentino-cdn.thron.com/delivery/public/image/valentino/6545e364-3ef3-48f6-8ae6-1ac545a0bf78/VA14I6D/std/828x0/hp_mobile_w_act-collection-v2.jpg?quality=80"
            height="600"
            alt="First slide"
          />
          <img
            className="d-block w-10"
            src="https://valentino-cdn.thron.com/delivery/public/image/valentino/6545e364-3ef3-48f6-8ae6-1ac545a0bf78/VA14I6D/std/828x0/hp_mobile_w_act-collection-v2.jpg?quality=80"
            height="600"
            alt="First slide"
          />
        </Col>
        <Carousel.Caption>
          <h5>Soft ivory</h5>
          <p>
            Soft ivory and power gold up the opulence of the Fall/Winter 2021-22 collection, transforming fluid
            silhouettes into daywear items.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Col className="d-flex justify-content-center">
          <img
            className="d-block w-10"
            src="https://valentino-cdn.thron.com/delivery/public/image/valentino/5c3f45b2-c4f1-422f-84e6-58c3fb215470/VA14I6D/std/828x0/r_v_act_ds_1080x_135022.jpg?quality=80"
            height="600"
            alt="Second slide"
          />
          <img
            className="d-block w-10"
            src="https://valentino-cdn.thron.com/delivery/public/image/valentino/5c3f45b2-c4f1-422f-84e6-58c3fb215470/VA14I6D/std/828x0/r_v_act_ds_1080x_135022.jpg?quality=80"
            height="600"
            alt="Second slide"
          />
          <img
            className="d-block w-10"
            src="https://valentino-cdn.thron.com/delivery/public/image/valentino/5c3f45b2-c4f1-422f-84e6-58c3fb215470/VA14I6D/std/828x0/r_v_act_ds_1080x_135022.jpg?quality=80"
            height="600"
            alt="Second slide"
          />
        </Col>
        <Carousel.Caption>
          <h5>ROMAN STUD</h5>
          <p>Roman architecture inspired an iconic motif able to manifest the Maison’s bourgeois and punk essences.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://valentino-cdn.thron.com/delivery/public/image/valentino/3526aac3-847c-475b-88e1-2268484d1fa7/VA14I6D/std/1600x0/shelves_bags_-stud-sign.jpg?quality=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>STUD SIGN</h5>
          <p>
            A new attitude takes center stage: With the Valentino Garavani Stud Sign shoulder bag, a new narrative for
            iconic codes begin
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Showcase
