const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http');

http.Server(app).listen(3001);

app.use(cors())
app.use(bodyParser.json())

let todo = [];

app.get('/getTodoList', (req, res) => {
    res.send(JSON.stringify(todo))
})

app.post('/sendMessage', (req, res) => {
    todo.push(req.body)
    res.end('Successful')
})


console.log(`server started on port 3001`)
