const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http');

// const login = "root";
// const password = "123456"

const passwords = {
    'root': '123456'
}


const validation = (data) => (Object.keys(passwords).includes(data.login) && `${data.password}` === passwords[data.login]);

const regValidation = (data) =>  (!Object.keys(passwords).includes(data.login) && data.login != '' & data.login != null )


http.Server(app).listen(3001);

app.use(cors())
app.use(bodyParser.json())



app.post('/login', (req, res) => {
    console.log(req.body)

    res.end(JSON.stringify({isUserLogin: validation(req.body)}))
})

app.post('/reg', (req, res)=>{
    let validity = regValidation(req.body)

    if (validity) {
        passwords[req.body.login] = req.body.password
    }

    res.end(JSON.stringify({isUserLogin: validity}))

})

console.log(`server started on port 3001`)
