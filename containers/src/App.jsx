import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar';

const App = () => {
  const user = "Sanjeevani" ;
  const age = 23 ;
  return (
    <div>
      {/* <Card/>
      <div className='card'>
        <h1>Hellllllllo Sonuuuuuuuu</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, excepturi.</p>
      </div>
      {Card()} */}

      <Navbar/>
      <h1>Hello , Guys I am {user}</h1>
      <h1>And I am {age} year old</h1>
      <Card/>
      
    </div>
  )
}

export default App
