const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http');
const TaskUtils = require('./TaskUtils')


app.use(cors())
app.use(bodyParser.json())

http.Server(app).listen(3001);

app.get('/getTask', (req, res) => {
    res.end(TaskUtils.getTaskData(`${req.query.id}.json`))
})

app.get('/getAllTasks', (req, res) => {


    res.end(JSON.stringify(TaskUtils.getTasks().map(file => TaskUtils.getTaskData(file))))
})

app.get('/getSomeTasks', (req, res)=>{
    let data = TaskUtils.getTasks().map(file => TaskUtils.getTaskData(file))
    res.end(JSON.stringify(data.slice(req.query.got, req.query.get)))
})

app.post('/createTask', (req, res) => {
    TaskUtils.createTask(JSON.stringify(req.body))
    res.end('SUCCESS')
})





console.log(`server started on port 3001`)
