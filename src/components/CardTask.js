import React from "react";
import {Card,Button,} from"react-bootstrap"


function CardTask(props) {
    return (
      <div className="Cardd" >
    <Card  style={{ width: '15rem' }}>
    <Card.Img variant="top" src={props.iamge} />
    <Card.Body>
      <Card.Title className="cardtitle">{props.title}</Card.Title>
      <Card.Text className="cardtitle">
      {props.price}
      </Card.Text>
      <Button className="cardbutton">buy</Button>
    </Card.Body>
  </Card>
  </div> 
   );
}

export default CardTask;