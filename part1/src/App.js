
const App = () => {
  
 // const part1 = 'Fundamentals of React'
  //const exercises1 = 10
 // const part2 = 'Using props to pass data'
 // const exercises2 = 7
 // const part3 = 'State of a component'
 // const exercises3 = 14
/*
  const part1 = {
    name : 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name : 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name : 'State of a component',
    exercises : 14
  }
*/
const course = 'Half Stack application development'
const parts = [
  {
    name : 'Fundamentals of React',
    exercises: 10
  },
  {
    name : 'Using props to pass data',
    exercises: 7
  },
  {
    name : 'State of a component',
    exercises : 14
  }
]
console.log("happy birthday to josh");
  return (
   
    <div>
     
      <Header course={course}/>

      <Content props={parts}/>
      
      <Total parts = {parts}/>
    </div>
  );
}


const Header = (props) => {
  return (
    <div>
     <h1>{props.course}</h1> 
    </div>
  )

}

const Content = ({props}) => {
  let courses = new Array(props[0],props[1],props[2])
  console.log(courses[0]);
  console.log(courses[1]);  
 

  return (
    <div>
      <Part course= {courses[0]} />
      <Part course= {courses[1]} />
      <Part course= {courses[2]} />
    </div>
  )
}
/*
const Content = (props) => {
  return (
    <div>
      <Part props= {props[0]} />
      <Part props= {props[1]} />
      <Part props= {props[2]} />
    </div>
  )
}
*/
/*
const Total = (props) => {
  return (
    <div>
    <p> Number of exercises { props[0].exercises + props[1].exercises + props[2].exercises   }</p>  
    </div>
  )
}
const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>{course.name} {course.exercises}</p>
    </div>
  )
}
*/

const Part = ({course}) => {
 // console.log({course});
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

