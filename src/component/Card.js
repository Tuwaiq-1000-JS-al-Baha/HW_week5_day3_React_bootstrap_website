import { CardGroup, Card } from "react-bootstrap"

function CardGroupItem() {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIxW7-9mO9GcUUSu-xx4c5JA_RpxLXpWuOw&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Guava</Card.Title>
            <Card.Text>Guava is Fresh</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_P6hVDU0ENuCcUl5Agbgc5wiwqKqRAWdX-w&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>peach</Card.Title>
            <Card.Text>Peach is fresh </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShfpwb1Oo824fqdiIV2RobYEoaAUlRtv8F3Q&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Kiwi</Card.Title>
            <Card.Text>Kiwi is delicious and Fresh</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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"
          />
          <Card.Body>
            <Card.Title>Grape</Card.Title>
            <Card.Text>Grape is fresh </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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"
          />
          <Card.Body>
            <Card.Title>Banana</Card.Title>
            <Card.Text>Banana is fresh and delicious </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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"
          />
          <Card.Body>
            <Card.Title>Pineapple</Card.Title>
            <Card.Text>Pineaple is fresh</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  )
}

export default CardGroupItem
