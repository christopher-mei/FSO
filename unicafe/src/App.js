import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 
  const handleGoodClick = () => {
    setGood(good+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={handleGoodClick} > good</button>
      <button onClick={handleNeutralClick}>neutral </button>
      <button onClick={handleBadClick}>bad</button>

    

      <h1>statistics</h1>

      <p>good {good} <br/>
      neutral {neutral}<br/>
      bad {bad}</p>

    </div>
  )
}

/*
const Button = ({handler},{text}) => {
  return (
    <div> 
    <button onClick={handler}>{text}</button>
    </div>  
  )
 
  
}


const HandleGood = ({good},{setGood}) => {
  const num = Number({good})
  const newNum = {num+1}
  setGood(+1);
}
const HandleBad = ({bad},{setBad}) => {
  setBad(bad+1)
}
const HandleNeutral =({neutral},{setNeutral}) => {
  setNeutral(neutral+1);
}

*/

export default App