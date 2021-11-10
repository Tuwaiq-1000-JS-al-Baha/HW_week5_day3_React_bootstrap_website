import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NafbarSection from "./Comppont/NafbarSection"
import CardSection from "./Comppont/CardSection"
import { Carousel } from "react-bootstrap"


function App() {
  return (
    <>
      <NafbarSection />

     <Carousel>
      <Carousel.Item>
        <img 
          src="https://www.byperth.com/wp-content/uploads/2018/04/stock-analyzer-project-architecture-1.jpg"
          height="400px"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src="https://freetuts.net/upload/learn_post/images/2018/06/18/71/node-react.jpeg"
          height="400px "
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src="https://belajarreactjs.com/wp-content/uploads/2019/09/reactjs2.jpg"
          height="400px"
        />

    
      </Carousel.Item>
    </Carousel>

    <CardSection/>
    </>
  )
}

export default App
