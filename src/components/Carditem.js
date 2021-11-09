import { Card, CardGroup } from "react-bootstrap"
function Carditem() {
  return (
    <>
      <CardGroup>
        <Card mx-4 style={{ width: "16rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Card.Body>
            <Card.Title>cappuccino</Card.Title>
            <Card.Text>
              cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk, with
              the surface topped with foamed milk.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Card.Body>
            <Card.Title>black coffee</Card.Title>
            <Card.Text>someone would want to skip the cream and sugar in their coffee.. </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/302900/pexels-photo-302900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Card.Body>
            <Card.Title>latte</Card.Title>
            <Card.Text>
              The coffee is brewed with a stovetop moka pot and poured into a cup containing heated milk
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  )
}

export default Carditem
