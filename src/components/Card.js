import { CardGroup, Card } from "react-bootstrap"

function Cards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.universemagic.com/images/2015/08/7421-1-or-1440081009.webp"
          height="400px"
          width="300px"
        />
        <Card.Body>
          <Card.Title> Vertebrate Fish</Card.Title>
          <Card.Text>
            Bones of fish have a skeleton made of bones, but some of them, such as sharks, have a skeleton made of
            cartilage. We find that fish are divided into three main groups, including cartilaginous fish, bony fish,
            and finned fish.
          </Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.universemagic.com/images/2015/08/7421-2-or-1440081010.webp"
          height="400px"
          width="300px"
        />
        <Card.Body>
          <Card.Title> Cartilaginous Fish</Card.Title>
          <Card.Text>
            It was called by this name because the framework of their bodies is made of cartilage instead of skeletons,
            and this makes it more flexible. This cartilaginous skeleton enables fish to grow to incredible sizes.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.universemagic.com/images/2015/08/7421-3-or-1440081011.webp"
          height="400px"
          width="300px"
        />
        <Card.Body>
          <Card.Title> Finned fish </Card.Title>
          <Card.Text>
            To be the most diverse among the three groups of fish, and includes a group of 23,000 species, including
            trout, lantern fish, herring, electric eels and many more, and there are approximately 24,000 species of
            finned fish that are divided into 431 family, which is in contrast to cartilaginous fish.
          </Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </CardGroup>
  )
}
export default Cards
