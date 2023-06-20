import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  var total = anecdotes.length ;

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(total).fill(0) )

  const mostVotes = Math.max(...votes)
  console.log("the most votes " + mostVotes)
  const indexOfLargest = votes.indexOf(mostVotes)
  console.log("index of most votes  " + indexOfLargest)

  const randomInt = (total) => {
    return getRandomInt(total)
  }

  const handleNext= () => {
    var newAnec = randomInt(total)
    setSelected(newAnec)
    console.log("random integer is " + newAnec)
    console.log("votes" + votes[newAnec] )
  }
  
  const handleVote = () =>{
    const newVotes = [...votes];
      newVotes[selected] += 1;
    setVotes(newVotes)
    console.log( " the new vote count is " + {votes:selected} )
  }
  ////////////////////////////////
  // here is what app will render //
  ////////////////////////////////
  return (
    <div>
      <h1>Anecdote of the day </h1>
      {anecdotes[selected]}<br/>
      has {votes[selected]} vote(s)
      <Button text="vote" onClick={handleVote}/>
      <Button text="next anecdote" onClick={handleNext}/>
      <h1>Anecdote with most votes </h1>
      {anecdotes[indexOfLargest]} <br/>

      has {mostVotes} votes


    </div>
  )
}

const Button = ({text,onClick}) => {
  return(
    <div> 
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default App