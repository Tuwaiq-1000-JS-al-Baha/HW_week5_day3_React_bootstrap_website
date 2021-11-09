import { CardGroup, Card } from "react-bootstrap"
function CardItems(props) {
  return (
    <CardGroup>
      <Card>
        <Card.Img
          variant="top"
          src="http://www.morrispublishing.com/images/self-publishing/books-published/Novels.jpg"
        />
        <Card.Body>
          <Card.Title>Novels</Card.Title>
          <Card.Text>
            a relatively long work of narrativefiction, normally written in proseform, and which is typically published
            as a book.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.the-philosophy.com/wp-content/uploads/2015/12/bookshelf-2-720x340.jpg"
        />
        <Card.Body>
          <Card.Title>philosophy</Card.Title>
          <Card.Text>
            activity people undertake when they seek to understand fundamental truths about themselves, the world in
            which they live, and their relationships to the world and to each other. As an academic discipline
            philosophy is much the same.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://img.huffingtonpost.com/asset/59b8591e1c0000240079e23b.jpeg?cache=dn210dqs4c&ops=1910_1000"
        />
        <Card.Body>
          <Card.Title>Poems</Card.Title>
          <Card.Text>
            form of art in which the skillful choice and arrangement of words achieves a desired emotional effect. Poet
            Percy Bysshe Shelly defined poetry as "the expression of the imagination." Robert Frost said that a poem
            forms when "an emotion has found its thought and the thought has found words." Words are the medium of
            poetry.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default CardItems
