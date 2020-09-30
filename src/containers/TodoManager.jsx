import React, {Fragment} from 'react'
import {TodoTile} from "../components/todoTile";


export class TodoManager extends React.Component { // Smart component - логика
    constructor(props) {
        super(props);
        this.state = {
            todoData: [
                {
                    id: 0,
                    text: "Task1",
                    description: "Task1 is cool",
                    deadline: "01.09",
                    status: "В процессе"
                },
                {
                    id: 1,
                    text: "Task2",
                    description: "Task2 is cool",
                    deadline: "01.05",
                    status: "В процессе"
                },
                {
                    id: 2,
                    text: "Task3",
                    description: "Task3 is cool",
                    deadline: "01.03",
                    status: "В процессе"
                },
                {
                    id: 3,
                    text: "Task4",
                    description: "Task4 is cool",
                    deadline: "01.02",
                    status: "В процессе"
                }
            ]
        }
        this.changeStatus.bind(this)
    }


    changeStatus = (id, newStatus) => {
        this.setState({
            todoData: this.state.todoData.map((todo) => {
                if (todo.id === id) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        description: todo.description,
                        deadline: todo.deadline,
                        status: newStatus
                    }
                } else return todo
            })
        })
    }

    render() {
        return this.state.todoData.map((todo) => <TodoTile
            changeStatus={(newStatus = "") => this.changeStatus(todo.id, newStatus)}
            status={todo.status}
            tile={todo.text}
            description={todo.description}
            deadline={todo.deadline}
        />)
    }
}

