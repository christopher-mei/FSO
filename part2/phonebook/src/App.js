import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

 //take what is in the input box and put it in newName state 
  const handleNameAdd = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
//take what is in the input box and put it in newNumber state 
const handleNumberAdd = (event) => {
  console.log(event.target.value)
  setNewNumber(event.target.value)
}
//take what is in the search box and put it in seach state 
const handleSearch = (event) => {
  console.log(event.target.value)
  setNewSearch(event.target.value)
}

function isDuplicate(person){
  return person.name=== newName
}

  //when the user clicks submit, take newName state and add it to list of persons state 
  const addPerson = (event) => {
    event.preventDefault()
    //testing
    //const names = persons.map((person) => [person.name]);
    if(persons.find(isDuplicate)){
      alert("name already exists")
    }else{

    const personObject = {
      name: newName,
      number: newNumber
    };

      setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
  }//else bracket
  
  }

  return (
    
    <div>
      <div> debug: newName state: {newName} </div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={newSearch} onChange={handleSearch}/> </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input value={newName} onChange={handleNameAdd}/>
        </div>
        <div>
        <div>
          number: <input value={newNumber} onChange={handleNumberAdd}/>
        </div>
          <button type="submit">add</button>
        </div>
      </form>
     
     
      <h2>Numbers</h2>
      <Contacts persons={persons} search={newSearch}/>
    

    </div>
  )
}

const Contacts = ({search, persons}) => {
  if( search==='' ) {
    return(
    persons.map(person => 
      <div key={persons.name}> {person.name} : {person.number}</div>
      )
    )
  }else{
    const filtered = persons.filter(person=> person.name.toLowerCase().includes(search.toLowerCase() ) )
   
    return(
      filtered.map(person => 
        <div key={filtered.name}> {person.name} : {person.number}</div>
        )
    )
  }

}
  
  
  
    
  
  

export default App



//when it gets input it first sets the state to new name 

//only after submit does it actually add that peice of state into the list of persons/ phone book

/*

 const addName = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName
    };

    setPersons(persons.concat(personObject))
    setNewName('')
  }


const dontAddName = () =>{
  return (
    <div> alert({newName} is already in the phone book )</div>
  )
  }
}

  //todo: add error check to look for duplicate name 
  const duplicateCheck = persons.every(person => {
    if (person.name === newName) {
      return false;
    }
    return true;
  })

 

  //error check, this will use duplicate check to either call add Name or show alert 
  const errorCheck = duplicateCheck ? this.addName : this.dontAddName ;


// last error check that did not work 
//for some reason it only worked fro arto, 
otherwise it would give you the error but still 
log the entry

      for(var i =0; i<persons.length; i++){
      if(persons[i].name===newName){
        return alert("oh no!") 
        break;
      }
      else {
        console.log('current input', newName)
        console.log('the match')
      setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }
    }
*/


/*

// old numbers render logic 

 <h2>Numbers</h2>
      {persons.map(person => 
      <div key={persons.name}> {person.name} : {person.number}</div>
      

      */