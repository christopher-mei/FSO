import Content from './Content'
import Header from './Header'




const Course = ({parts,name}) => {

    // me trying to use reduce to sum up the exercises lol 
    /*
   const exArray = []

    parts.map(part => 
        exArray.concat(part.exercises) 
        console.log(fds)
        )
   
    console.log(exArray)
   
    const initialValue = 0;
    const sumWithInitial = exArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
*/
    return (
        <div>
            <h1> -------course component--------</h1>
            <Header course = {name} />
            <Content parts = {parts}/>
            number of exerciese {sumWithInitial}
            <h1> -------course component--------</h1>
        </div>
    )
}







export default Course