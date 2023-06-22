import Content from './Content'
import Header from './Header'




const Course = ({parts,name}) => {

    // me trying to use reduce to sum up the exercises lol 
    
   const exercisesArray = []

    Array.from(parts, x => exercisesArray.push(x.exercises) )
        
        
   
    console.log(exercisesArray)
   
    const initialValue = 0;
    const sumWithInitial = exercisesArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

    return (
        <div>
            <Header course = {name} />
            <Content parts = {parts}/>
            <h4>total of {sumWithInitial} exercises</h4>
        </div>
    )
}







export default Course