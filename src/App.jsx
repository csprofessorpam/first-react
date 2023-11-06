import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello/Hello'
import Counter from './components/Counter/Counter'
import Welcome from './components/Welcome/Welcome'


function App() {
  const myname1 = "Pam"
  const myname2 = "Jo"

  //const colors=["pink", "green", "purple", "yellow"]

  const users = [
    {name: "Pam", color: "pink", id: 0, city:"Houston"}, 
    {name: "Jo", color: "red", id: 1, city:"San Francisco"}, 
    {name: "Sam", color: "blue", id: 2, city: "New York City"},
    {name: "Bob", color: "green", id: 3, city: "Chicago"}
  ]

  return (
    <div>
      <Welcome />
      {/* {
        users.map(item=> <Hello user={item} key={item.id}/>)
        // users.map(item=> <Hello name={item} color="red" />)
      } */}
      {/* {
         colors.map((item, index)=><p key={index}>{index} {item}</p>)
      } */}
      {/* <Counter />     */}
      {/* <Hello name={myname1} color="pink" /> 
      <Hello name={myname2} color="blue" /> */}
    </div>
    
  )
}

export default App
