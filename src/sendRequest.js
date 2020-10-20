const axios = require('axios')

axios.post('http://localhost:3001/sendMessage', {
    date: new Date().getUTCDate(),
    username: "Kolya",
    password: "12312331sadfsadfasdfasdf2312312132"
}).then((res) => console.log(res.data))
