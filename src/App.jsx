import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Components/Navbar/Nav'
import Card from './Components/Card/Card'
import data from './Components/Card/Data'


function App() {
  const card = data.map(item=>{
    return(
      <Card
      key = {item.id}
      {...item}
      />
    )
    
  })
    
  return (
    <div className="App">
     <Nav/>
     {card}
    </div>
    
  )
}
export default App
