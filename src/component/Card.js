import { Card } from "react-bootstrap"
function Cardfunction(props) {
  return (
    <Card className="mx-4 mt-5" style={{ width: "18rem", height: "500px" }}>
      <Card.Img variant="top" src={props.image} style={{ height: "300px" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cardfunction
