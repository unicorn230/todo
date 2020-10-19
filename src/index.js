const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http');

const login = "root";
const password = "123456"

const validation = (data) => (data.login === login && `${data.password}` === password);

http.Server(app).listen(3001);

app.use(cors())
app.use(bodyParser.json())


app.post('/login', (req, res) => {
    console.log(req.body)
    res.end(JSON.stringify({isUserLogin: validation(req.body)}))
})



console.log(`server started on port 3001`)
