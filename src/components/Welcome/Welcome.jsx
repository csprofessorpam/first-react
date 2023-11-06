import React from 'react'

function Welcome() {
    //create state to hold user input
    const [yourname, setYourname] = React.useState('')
    const [message, setMessage] = React.useState('')

    const handleInput = (e) =>{
        //console.log('typing', e.target.value)
        //e.target.value has user input in textbox
        //store user input into state
        setYourname(e.target.value)
    }

    const sayHello = () =>{
        //when button is clicked, generate output message with yourname
        console.log('hello')
        //generate output message
        setMessage(`Hello ${yourname}! How are you today?`)
        //clear the textbox
        setYourname('')
    }

  return (
    <div>
        <input type="text" value={yourname} 
               //onChange={handleInput}
               onChange={(e)=>setYourname(e.target.value)}
               placeholder="enter your name" />
        <button onClick={sayHello}> Say Hello</button>
        <button onClick={()=>setMessage('')}>Clear</button>
        <h3>{message}</h3>
    </div>
  )
}

export default Welcome