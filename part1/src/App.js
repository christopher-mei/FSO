const Total = (props) => {
  return (
    <div>
    <p> Number of exercises { props.exercises1 + props.exercises2 + props.exercises3   }</p>  
    </div>
  )
}

const Part = (props) => {
  return (
    <div> 
      <p>{props.name} {props.number}</p>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part name={props.part1} number={props.exercises1} />
      <Part name={props.part2} number={props.exercises2} />
      <Part name={props.part3} number={props.exercises3} />
    </div>
  )
}

export default App