const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

app.use(cors({
    origin: '*'
}))
app.use(express.json())

// const PORT = 3005;

// const db = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: 'KNight1990$',
//     // password: process.env.SQL_SERVER_DB_PASSWORD,
//     database: 'employeeSystem'
// })

const db = mysql.createConnection({
    user: 'b694552966eb5c',
    host: 'us-cdbr-east-06.cleardb.net',
    password: '65e824ed',
    // password: process.env.SQL_SERVER_DB_PASSWORD,
    database: 'heroku_b19dbc561a9e46f'
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
        'UPDATE employees SET wage = ? WHERE id = ?',
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


app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query(
        'DELETE FROM employees WHERE id = ?',
        id,
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})

const PORT = process.env.PORT || 3005;
app.listen(PORT);

// app.listen(process.env.PORT || PORT, ()=> {
//     console.log(`port is running on port ${PORT}`)
// })