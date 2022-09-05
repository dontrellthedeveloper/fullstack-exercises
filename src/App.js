import logo from './logo.svg';
import './App.css';
import UseStateExample from "./components/hooks/useStateExample";
import UseStateExample2 from "./components/hooks/UseStateExample2";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<UseStateExample/>} exact />
            <Route path='/useState' element={<UseStateExample/>}  />
            <Route path='/useState2' element={<UseStateExample2/>}  />
            {/*<UseStateExample/>*/}
        </Routes>
    </div>
  );
}

export default App;
