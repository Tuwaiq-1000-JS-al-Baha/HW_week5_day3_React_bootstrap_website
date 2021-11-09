import { Row, Col } from "react-bootstrap"
import Cardfunction from "./component/Card"
import Carouselfuncion from "./component/Carousel"
import Navbarfunction from "./component/Navbar"

function App() {
  return (
    <>
      <Navbarfunction />
      <Row>
        <Col>
          <Cardfunction
            image="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/beautiful-pposter.jpg?itok=77Iqe3Yr"
            title="A Beautiful Mind"
            description="After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish."
          />
        </Col>
        <Col>
          <Cardfunction
            image="https://resizing.flixster.com/JakzV7aSbNtYx4ENTuWX7Jt2tDQ=/300x300/v2/https://flxt.tmsimg.com/assets/p10082580_v_h9_af.jpg"
            title="The Best Offer"
            description="A lonely art expert working for a mysterious and reclusive heiress finds not only her art worth examining."
          />
        </Col>
        <Col>
          <Cardfunction
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKJvJZX3YBQcxfG_sLwNY2dBCjzoG6xZxgw&usqp=CAU"
            title="Fractured"
            description="A couple stops at a gas station, where their 6 y.o. daughter's arm is fractured. They hurry to a hospital. Something strange is going on there. The wife and daughter go missing."
          />
        </Col>
        <Col>
          <Cardfunction
            image="https://static.wixstatic.com/media/4b961e_10662fe0d6a94960a8e078b64a5ae137~mv2.jpg/v1/fill/w_990,h_1387,al_c,q_90/4b961e_10662fe0d6a94960a8e078b64a5ae137~mv2.jpg"
            title="The Prestige"
            description="After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other."
          />
        </Col>
      </Row>
      <Carouselfuncion />
    </>
  )
}

export default App
