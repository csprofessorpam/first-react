import React from 'react'
import './QuestionToggle.css'
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

function QuestionToggle({question}) {
    //start with a simple js variable
    //let open = true;
    //change to state
    const [open, setOpen] = React.useState(true)
  return (
    <div className="collapsible-container">
        <div className="q-container">
            <h4 >{question.topic}: {question.question}</h4>
            {
                open?
                <FaChevronUp onClick={()=>setOpen(!open)} />
                :
                <FaChevronDown onClick={()=>setOpen(!open)} />
            }
        </div>
        <div className="a-container">
        {
            open && <p>{question.answer}</p>

            // open ?
            // <p>Answer</p>
            // :
            // null
        }
        </div>

    </div>
  )
}

export default QuestionToggle