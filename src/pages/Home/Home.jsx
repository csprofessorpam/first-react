import React from 'react'
import Flashcard from '../../components/Flashcard/Flashcard'



function Home() {

  const q1 = {
    topic: "Arithmetic Expressions",
    question: "Evaluate 3 + 4 * 5",
    answer: "Answer is 23 because of order of operations:  multiplication has precedence over addition"
  
  }

  const qlist = [
    {
      topic: "Arithmetic Expressions",
      question: "Evaluate 3 + 4 * 5",
      answer: "Answer is 23 because of order of operations multiplication has precedence over addition"
    },
    {
      topic: "Arithmetic operators",
      question: "Evaluate 10 % 3",
      answer: "Answer is 1.  % is the mod operator, gives remainder from integer division"
    }
  ]
  

  return (
    <div>
      {/* <Flashcard  data={q1} /> */}
      {
        qlist.map(item=><Flashcard data={item} />)
      }

    </div>
  )
}

export default Home