
import Content from './Content'
import Header from './Header'
import Course from './Course'

const App = () => {

const course = 'Half Stack application development'
const parts = [
  {
    id: 1,
    name : 'Fundamentals of React',
    exercises: 10
  },
  {
    id: 2,
    name : 'Using props to pass data',
    exercises: 7
  },
  {
    id: 3,
    name : 'State of a component',
    exercises : 14
  },
  {
    id:4,
    name : 'test part',
    exercises : 15
  }
]
const result = parts.map( lecture => lecture.name)
console.log(result)


  return (
    <div>
      <h1>part names</h1>
      
        {parts.map(lecture => 
          <div key={lecture.id}>
            {lecture.name} {lecture.exercises}
          </div>
        )}
      
      <Course parts={parts} name={course} />

      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts = {parts}/>
    </div>
  );
}


const Part = ({course}) => {
  return (
    <div>
    <p> {course.name} {course.exercises}</p> 
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
    <p> Number of exercises { parts[0].exercises + parts[1].exercises + parts[2].exercises   }</p>  
    </div>
  )
}

export default App

