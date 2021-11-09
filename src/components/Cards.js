import { Card, Button, CardGroup, Col } from "react-bootstrap"
function Cards() {
  return (
    <>
      <CardGroup>
        <Col>
          <Card bg="dark" text="light" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://occ-0-3868-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeDyYguyRPqiONrCAsZRrrEK52jApnv5eXKes28q7dGwc3RiQJ_T_OBHnu9dh3JqFT8V1qbwUUROnTTsUmLp9lW_40A.jpg?r=93b"
            />
            <Card.Body>
              <Card.Title>Venom</Card.Title>
              <Card.Text>
                A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote
                that gives him remarkable superpowers.
              </Card.Text>
              <Button variant="danger" size="sm">
                Go watching
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="light" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://occ-0-3868-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXUaL_qJwiOl9ebYDKWIpnhM8mHuYUvOdi6Ur38LpO3pI2ACuE_i63Xb3-AmPEJtX7IBw5y1DFS_NjgMTJ4-yky1Hww.jpg?r=4a0"
            />
            <Card.Body>
              <Card.Title>Matilda</Card.Title>
              <Card.Text>
                Cursed with a cruel school principal and parents, a little girl discovers her hidden powers -- which she
                uses to stand up to the bullies in her life.
              </Card.Text>
              <Button variant="danger" size="sm">
                Go watching
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="dark" text="light" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://occ-0-3868-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTakhvVLP7pEx3N6lznpnUX-pPCqaWEP8SoKas38_n_g2WrYymU8usw4W_M3w7w4F166a3l-Mec4AvD7SDC1HXJI9As.jpg?r=bcd"
            />
            <Card.Body>
              <Card.Title>Gemini Man</Card.Title>
              <Card.Text>
                A recently-retired sniper faces off with a younger, stronger, cloned version of himself that a covert
                government agency has engineered to kill him.
              </Card.Text>
              <Button variant="danger" size="sm">
                Go watching
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </CardGroup>
    </>
  )
}

export default Cards
