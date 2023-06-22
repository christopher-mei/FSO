
import Content from './Content'
import Header from './Header'
import Course from './Course'

const App = () => {


const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]




  return (
    <div>
      
      
        {courses.map(course => 
          <div key={course.id}>
          <Course parts={course.parts} name={course.name} />
           
          </div>
        )}
      
      

      
      
      
    </div>
  );
}

/*

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

*/
export default App

// {parts.map(part => <li > {part.name} {part.exercises} </li>)}