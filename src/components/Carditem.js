import { Card, CardGroup } from "react-bootstrap"

function Carditem() {
  return (
    <div className="mx-5 mt-5">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://www.valentino.com/variants/images/31432202864704398/F/w500.jpg" />
          <Card.Body>
            <Card.Title>SMALL VSLING GRAINY CALFSKIN HANDBAG</Card.Title>
            <Card.Text>
              Small Valentino Garavani VSLING grainy calfskin leather handbag with VLogo Signature closure. Equipped
              with an extendable shoulder strap, this accessory can be worn as a crossbody/shoulder bag, or carried in
              the hand using the handle.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.valentino.com/variants/images/24092600057202995/F/w500.jpg" />
          <Card.Body>
            <Card.Title>LARGE GRAIN CALFSKIN LEATHER ROCKSTUD SHOPPING BAG</Card.Title>
            <Card.Text>
              Valentino Garavani Rockstud shopper in elk-print calfskin leather. Top edge adorned with platinum studs.
              Comfortable to wear on the shoulder.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.valentino.com/variants/images/25185454456488191/F/w500.jpg" />
          <Card.Body>
            <Card.Title>LARGE ROMAN STUD THE SHOULDER BAG IN NAPPA WITH GRID DETAILING</Card.Title>
            <Card.Text>
              Large lambskin nappa Valentino Garavani Roman Stud The Shoulder Bag with contrasting leather grid
              detailing decorated with maxi studs.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  )
}

export default Carditem
