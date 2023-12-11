import React from 'react'
import './Flashcard.css'
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

function Flashcard({data}) {
    //start with a simple js variable
    //let open = false;
    //change to state
    const [open, setOpen] = React.useState(false)

  return (
    <div className="flashcard-container">
        <div className='q-container'>
            <h4 className="question-text">{data.topic} : {data.question}</h4>
            {
                open?
                <FaChevronUp onClick={()=>setOpen(!open)} />
                :
                <FaChevronDown onClick={()=>setOpen(!open)} />
            }
        </div>
        
        {
            open && <p className="answer-text">{data.answer}</p>
        }
        {/* {
            open ? <p>Answer</p> : null
        } */}
    </div>
  )
}

export default Flashcard