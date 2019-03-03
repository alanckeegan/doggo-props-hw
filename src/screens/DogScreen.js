import React from 'react'
import Dog from '../components/Dog'

export default class DogScreen extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Doggo Props</h1>
        <Dog />
      </div>
    )
  }
}
