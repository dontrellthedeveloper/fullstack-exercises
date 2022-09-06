import React, {useState} from 'react';
import './react-sql.css';
import Axios from "axios";

const ReactSql = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);

    const [employeeList, setEmployeeList] = useState([])

    const addEmployee = () => {
        Axios.post('http://localhost:3005/create', {
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage
        }).then(() => {
            console.log('success')
            setEmployeeList([...employeeList, {
                name: name,
                age: age,
                country: country,
                position: position,
                wage: wage
            }])
        })
    }

    const getEmployees = () => {
        Axios.get('http://localhost:3005/employees').then((res) => {
            setEmployeeList(res.data)
        })
    }

    return (
        <div className='main-sql'>
            <div className='information'>
                <label>Name:</label>
                <input type="text" onChange={(event) => {setName(event.target.value)}}/>
                <label>Age:</label>
                <input type="text" onChange={(event) => {setAge(event.target.value)}}/>
                <label>Country:</label>
                <input type="text" onChange={(event) => {setCountry(event.target.value)}}/>
                <label>Position:</label>
                <input type="text" onChange={(event) => {setPosition(event.target.value)}}/>
                <label>Wage (year):</label>
                <input type="text" onChange={(event) => {setWage(event.target.value)}}/>
                <button onClick={addEmployee}>Add Employee</button>
            </div>
            <br/>
            =============
            <div className='employees'>
                <button onClick={getEmployees}>Show Employees</button>
                {employeeList.map((val, key) => {
                    return (
                        <div className='employee' key={key}>
                            <h3>Name: {val.name}</h3>
                            <h3>Age: {val.age}</h3>
                            <h3>County: {val.country}</h3>
                            <h3>Position: {val.position}</h3>
                            <h3>Wage: {val.wage}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ReactSql;