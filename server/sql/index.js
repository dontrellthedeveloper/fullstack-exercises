const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'KNight1990$',
    // password: process.env.SQL_SERVER_DB_PASSWORD,
    database: 'employeeSystem'
})

app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query(
        'INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)',
        [name, age, country, position, wage],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("values inserted")
            }
        }
    )
})

app.get('/employees', (req, res) => {
    db.query(
        'SELECT * FROM employees',
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})

app.put('/update', (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage
    db.query(
        'UPDATE SET employees wage = ? WHERE id = ?',
        [wage, id],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }

    )
})


// app.delete()

app.listen(3005, ()=> {
    console.log("port is running on port 3005")
})