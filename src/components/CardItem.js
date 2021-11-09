import { Card } from "react-bootstrap"

function CardItem(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.Img} height="400px" />
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>{props.Text} </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardItem
