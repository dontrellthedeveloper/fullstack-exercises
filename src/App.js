import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Homepage";

import UseStateExample from "./components/pages/hooks/useState/useStateExample";
import UseStateExample2 from "./components/pages/hooks/useState/UseStateExample2";
import UseReducerExample from "./components/pages/hooks/useReducer/useReducerExample";
import UseEffectExample from "./components/pages/hooks/useEffect/useEffectExample";
import UseRefExample from "./components/pages/hooks/useRef/useRefExample";
import UseLayoutEffectExample from "./components/pages/hooks/useLayoutEffect/useLayoutEffectExample";
import UseImperativeHandleExample from "./components/pages/hooks/useImperativeHandle/useImperativeHandle";
import UseContextExample from "./components/pages/hooks/useContext/useContextExample";
import ReactSql from "./components/pages/sql/react-sql";





function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} exact />
            <Route path='/hook/useState' element={<UseStateExample/>}  />
            <Route path='/hook/useState2' element={<UseStateExample2/>}  />
            <Route path='/hook/useReducer' element={<UseReducerExample/>}  />
            <Route path='/hook/useEffect' element={<UseEffectExample/>}  />
            <Route path='/hook/useRef' element={<UseRefExample/>}  />
            <Route path='/hook/useLayoutEffect' element={<UseLayoutEffectExample/>}  />
            <Route path='/hook/useImperativeHandle' element={<UseImperativeHandleExample/>}  />
            <Route path='/hook/useContext' element={<UseContextExample/>}  />
            <Route path='/sql' element={<ReactSql/>}  />
            {/*<UseStateExample/>*/}
        </Routes>
    </div>
  );
}

export default App;
