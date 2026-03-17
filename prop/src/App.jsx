import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      
      <Card user="Sanjeevani" age={23} img="https://images.unsplash.com/photo-1753454116026-1acabec671aa?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Sonu" age={20}  img = "https://images.unsplash.com/photo-1742712608977-4f47f57c6093?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Ganesh" age={25}  img = "https://images.unsplash.com/photo-1743082063774-674d414c74cb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      {/* <Card/>
      <Card/>
      <Card/> */}
    </div>
  )
}

export default App



function abc(a) {
  console.log("Hello", a);
  
}
abc('Sanjeevani')

// export default abc;