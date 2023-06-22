
import Part from './Part'

const Content = ({parts})=> {
       

         console.log(parts[0].name)
    return(
        <div>
         {parts.map(part => <li > {part.name} {part.exercises} </li>)}
            
        
        </div>
    )
}

/*
<Part parts = {props} /> 
*/
export default Content