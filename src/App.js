import React from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';
import { useState } from 'react';

const title = "Hacker Dormitory";
function App() {
  const [nameList, setNameList] = useState([]);
  const [msg, setmsg] = useState([]);

  return (
    
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search nameList={nameList} setNameList={setNameList} setmsg={setmsg}/>
        <Error msg ={msg}/>
        <ResidentsList nameList={nameList}/>
      </div>
    </div>
  );
}

export default App;
