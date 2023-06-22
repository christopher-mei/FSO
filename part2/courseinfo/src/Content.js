
import Part from './Part'

const Content = ({parts})=> {
       

    return(
        <div>
         {parts.map(part => 
         <div >
          <Part key = {parts.id} name={part.name} exercises={part.exercises}/> <br/>
         </div>
         )}    
        </div>
    )
}

export default Content