import { Card, Button } from "react-bootstrap"

function Carditem(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
          <Button variant="secondary"> For Watch</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Carditem
