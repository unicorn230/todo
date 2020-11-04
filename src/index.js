const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http');

const login = "root";
const password = "123456"

let tasks = [
    {
        id: 0,
        title: "new title",
        description: "Some description",
        date: `2010-10-16`,
        status: 0 // 0 - на выполение, 1 - в процесе, 2 - сделали
    },
    {
        id: 1,
        title: "new title",
        description: "Some description",
        date: `2010-10-16`,
        status: 0 // 0 - на выполение, 1 - в процесе, 2 - сделали
    },
    {
        id: 2,
        title: "new title",
        description: "Some description",
        date: `2010-10-16`,
        status: 0 // 0 - на выполение, 1 - в процесе, 2 - сделали
    },
    {
        id: 3,
        title: "2020-10-31",
        description: "Some description",
        date: `2020-10-31`,
        status: 0 // 0 - на выполение, 1 - в процесе, 2 - сделали
    },
    {
        id: 4,
        title: "2020-10-31",
        description: "Some description",
        date: `2020-10-31`,
        status: 1 // 0 - на выполение, 1 - в процесе, 2 - сделали
    },
    {
        id: 5,
        title: "2020-10-31",
        description: "Some description",
        date: `2020-10-31`,
        status: 2 // 0 - на выполение, 1 - в процесе, 2 - сделали
    },
]

const taskValidation = data => !(Date.parse(data.date) < Date.now())

const validation = (data) => (data.login === login && `${data.password}` === password);


http.Server(app).listen(3001);

app.use(cors())
app.use(bodyParser.json())


app.post('/login', (req, res) => {
    console.log(req.body)
    res.end(JSON.stringify({isUserLogin: validation(req.body)}))
})

app.post('/addTask', (req, res)=>{
    if (taskValidation(req.body)){
        tasks.push({...req.body, id: tasks.length})
    }
    res.end(JSON.stringify({isTaskAdded: taskValidation(req.body)}))
})

app.get('/TaskList', (req, res)=>{
        res.send(JSON.stringify(tasks))
})

console.log(`server started on port 3001`)
