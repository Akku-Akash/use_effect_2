import logo from './logo.svg';
import './App.css';

import { Stopwatch } from './components/Stopwatch';
import { useState } from 'react';

function App() {
  // const {show, setShow} = useState(true)
  return (
    <div className="App">
      {/* <Grocery/> */}
     <Stopwatch value ={1} end = {5}/> 

     
       
    </div>
  );
}

export default App;
