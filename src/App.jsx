import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello/Hello'
import Counter from './components/Counter/Counter'
import Welcome from './components/Welcome/Welcome'
import Header from './components/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Products from './pages/Products/Products';


function App() { 

  return (
    <BrowserRouter>
      <Header />

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
      </Routes>

    </BrowserRouter>  
  )
}
 // const myname1 = "Pam"
  // const myname2 = "Jo"

  //const colors=["pink", "green", "purple", "yellow"]

  // const users = [
  //   {name: "Pam", color: "pink", id: 0, city:"Houston"}, 
  //   {name: "Jo", color: "red", id: 1, city:"San Francisco"}, 
  //   {name: "Sam", color: "blue", id: 2, city: "New York City"},
  //   {name: "Bob", color: "green", id: 3, city: "Chicago"}
  // ]
{/* <Welcome /> */}
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
export default App
