import React from 'react'
import { Container, Row } from 'reactstrap'
import Dog from '../components/Dog'
import '../styles/Doggo.css'

const personalityTraits = ['friendly', 'goodboy', 'goofy']

export default class DogScreen extends React.Component {
  render() {
    return (
      <div className="doggo-screen">
        <Container>
          <h1>Doggo Props</h1>
          <Row className="doggo-row">
            <Dog
              name="Sir Crumples"
              color="Brown"
              age="2 years"
              personalityTraits = {personalityTraits} />
          </Row>
        </Container>
      </div>
    )
  }
}
