import React from "react";
import {Carousel} from"react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


function Carsoual () {
    return ( <Carousel fade>
        <Carousel.Item>
          <img
          src="https://www.wallpaperflare.com/static/833/35/769/books-library-vladstudio-artwork-wallpaper.jpg" width="100%"
          height= "400px"/>
          <Carousel.Caption  variant="dark" >
            <h3>Comprehensive book library</h3>
            <p>All  the book you are looking for you will find here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
             
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-childrens-books-1546897376.jpg" width="100%"
              height= "400px"/>
         
      
          <Carousel.Caption>
            <h3>Chikderns booke</h3>
            <p>Bookes suitable for children</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
              
              src="https://www.superprof.co.uk/blog/wp-content/uploads/2018/12/books-1702790_1280.jpg" width="100%"
              height= "400px"/>
          <Carousel.Caption>
            <h3>Historical books</h3>
            <p>you can find all the historical books here</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>)
}

export default Carsoual;