
import './App.css';
import Navigation from './components/Navigation';
// import Search from "./Search";
import AccountTable from './components/AccountTable';
import AccountForm from './components/AccountForm';
import React, {useState} from 'react';


function App() {
  const [list, setList] = useState([])
  // const [ search, setSearch] = useState(""); 
    return(
      // render all components
      <div className='container'>
        <Navigation/>
        {/* <Search search={search} setSearch={setSearch}/> */}
        <AccountForm list={list} setList={setList}/>
        <AccountTable list={list}/>

      </div>
    )
}

export default App;
