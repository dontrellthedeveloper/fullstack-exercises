import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Homepage";

import UseStateExample from "./components/hooks/useState/useStateExample";
import UseStateExample2 from "./components/hooks/useState/UseStateExample2";
import UseReducerExample from "./components/hooks/useReducer/useReducerExample";





function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} exact />
            <Route path='/hook/useState' element={<UseStateExample/>}  />
            <Route path='/hook/useState2' element={<UseStateExample2/>}  />
            <Route path='/hook/useReducer' element={<UseReducerExample/>}  />
            {/*<UseStateExample/>*/}
        </Routes>
    </div>
  );
}

export default App;
