import React from 'react'
import { pageContext } from '../App'

export default function Home() {

    const {setPage} = React.useContext(pageContext);

    const goTo = ()=>
    {
        setPage("questions");
    }
  return (
    <>
    <div>Welcome to Quiz app</div>
    <button className='btn btn-primary' onClick={goTo}>Start Quiz</button>
    </>
  )
}
