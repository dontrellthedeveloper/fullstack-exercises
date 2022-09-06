import React, {useState} from 'react';
import './react-sql.css';
import Axios from "axios";

const ReactSql = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);

    const [newWage, setNewWage] = useState(0)

    const [employeeList, setEmployeeList] = useState([])

    const addEmployee = () => {
        Axios.post('https://react-mysql-app-employee.herokuapp.com/create', {
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
        Axios.get('https://react-mysql-app-employee.herokuapp.com/employees').then((res) => {
            setEmployeeList(res.data)
        })
    }

    const updateEmployeeWage = (id) => {
        Axios.put('https://react-mysql-app-employee.herokuapp.com/update', {
            wage: newWage,
            id: id
        }).then((res) => {
            setEmployeeList(employeeList.map((val) => {
                return val.id == id ? {id: val.id, name: val.name, country: val.country, age: val.age ,position: val.position, wage: newWage} : val
            }))
        })
    }


    const deleteEmployee = (id) => {
        Axios.delete(`https://react-mysql-app-employee.herokuapp.com/delete/${id}`).then((res) => {
            setEmployeeList(employeeList.filter((val) => {
                return val.id != id
            }))
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
                            <div>
                                <h3>Name: {val.name}</h3>
                                <h3>Age: {val.age}</h3>
                                <h3>County: {val.country}</h3>
                                <h3>Position: {val.position}</h3>
                                <h3>Wage: {val.wage}</h3>
                            </div>
                            <div>
                                <input type="text" placeholder='2000...' onChange={(event) => {setNewWage(event.target.value)}}/>
                                <button onClick={() => updateEmployeeWage(val.id)}>Update</button>
                                <button onClick={() => deleteEmployee(val.id)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ReactSql;
