import React from 'react'
import { pageContext } from '../App'

export default function Results() {
    let {score} = React.useContext(pageContext);
  return (
    <div>
        <h4>Your score is : {score}</h4>
    </div>
  )
}
