import React from "react"
import { CardGroup, Card } from "react-bootstrap"

function CardSection() {
  return (
    <div className="mx-5 " >
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://reactjs.org/logo-og.png" />
          <Card.Body>
            <Card.Title>React</Card.Title>
            <Card.Text>
              React is a free and open-source front-end JavaScript library for building user interfaces or UI
              components. It is maintained by Facebook and
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png"
          />
          <Card.Body>
            <Card.Title>Node</Card.Title>
            <Card.Text>
              Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8
              engine and executes
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*wQxgEiVsgG0o7ti45WuFTQ.png" width={"300px"} />
          <Card.Body>
            <Card.Title>jsx</Card.Title>
            <Card.Text>
              It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe
              what the UI should look like.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}

export default CardSection
