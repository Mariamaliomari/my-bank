
import './App.css';
import Navigation from './components/Navigation';
import Search from "./components/Search";
import AccountTable from './components/AccountTable';
import AccountForm from './components/AccountForm';
import React, {useEffect,useState} from "react"


function App() {

  const [list, setList] = useState([])
  const [ search, setSearch] = useState ("")
  function addTransaction(transaction){


    fetch("http://localhost:3000/transactions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(transaction)
    })

  .then(response=>(response.json())
  ).then(data =>{
    setList([data, ...list])
  })
  }

useEffect(()=>{
  fetch("http://localhost:3000/transactions")
  .then(response=>(response.json())
  ).then(data =>{
    setList(data)
  })

},[]) 

const filteredList= list.filter((transaction)=>{
  if (search ==="") {
return true
  }else{
    return transaction.description.toLowerCase().includes(search.toLowerCase())
  }

})


 const newList=filteredList.map((array)=>{
  return(
    <tr key= {array.id} >
      <td>{array.date}</td>
      <td>{array.description}</td>
      <td>{array.category}</td>
      <td>{array.amount}</td>

    </tr>
  )
})
    return(
      // render all components
      <div className='container'>
    
        <Navigation/>
        <Search setSearch= {setSearch} search= {search}/> 
        <AccountForm addTransaction={ addTransaction}/> 
        <AccountTable newList= {newList}/>

      </div>
    )
}

export default App;
