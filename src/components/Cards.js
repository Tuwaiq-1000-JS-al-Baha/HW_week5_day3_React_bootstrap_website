import {CardGroup,Card} from 'react-bootstrap'

function Cards() {
    return ( 
        <>
     <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.etb3LAycsUlBoevYKvqQtwHaE8%26pid%3DApi&f=1" />
    <Card.Body>
      <Card.Title>Waterfall view</Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ipsam eos quisquam repellat unde? Porro, iusto quas possimus non laboriosam exercitationem error ipsa, incidunt dolor culpa saepe voluptas cum nam adipisci quibusdam ullam, a voluptates quisquam odit inventore sit. Deleniti.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KAh14ogl1nndMb4MqhfUSwHaEo%26pid%3DApi&f=1" />
    <Card.Body>
      <Card.Title>Misty view</Card.Title>
      <Card.Text>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam minima molestias tenetur eveniet vero aspernatur, ex ipsam libero nemo illo.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MkdOCEdP2nGLLcIMvvbNewHaEs%26pid%3DApi&f=1" />
    <Card.Body>
      <Card.Title>Lake view</Card.Title>
      <Card.Text>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem eligendi, eius cupiditate illum nostrum eos doloremque in veritatis, aliquam perferendis rerum delectus officia nobis provident nihil nulla libero voluptatum aut.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </>
     );
}

export default Cards;