const fs = require('fs')
const path = require('path')

const tasksPath = __dirname + '/tasks'

module.exports = class {
    constructor(props) {

    }

    static getTaskData = (fileName) => {
        return fs.readFileSync(`${tasksPath}/${fileName}`, 'utf-8')
    }

    static createTask = (taskData= "") => {
        fs.writeFileSync(`${tasksPath}/${this.getTasks().length + 1}.json`, taskData)
    }

    static getTasks = () => {
        return fs.readdirSync(tasksPath)
    }
}


