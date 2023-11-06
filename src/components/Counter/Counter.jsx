//rfce
import React, {useState} from 'react'
import './Counter.css'

function Counter() {
    //let count = 1;
    //create state for count
    const [count, setCount] = useState(0)
    //onClick
    const increment = () =>{
        console.log('increment')
        //increment count
        //count++;
        setCount(count+1)
        console.log('count is ', count)
        //document.getElementById('counter').innerHTML = count;
    }

    const decrement = () =>{
        //subtract one from state
        setCount(count-1)
    }
  return (
    <div className="counter-container">
        <h3 id='counter'>count is {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter