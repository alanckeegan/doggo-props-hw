import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

// this is a functional component

const Dog = ({ name, age, color, personalityTraits }) => (
  <div>
    <FontAwesomeIcon icon={ faDog } />
    <h2>{`Name: ${ name }`}</h2>
    <h6>{`Age: ${ age }`}</h6>
    <h6>{`Color: ${ color }`}</h6>
    <h6>Personality:</h6>
    <ul>
      { personalityTraits.map( personalityTrait => (
        <li>
          { personalityTrait }
        </li>
      ))}
    </ul>
  </div>
)

export default Dog
