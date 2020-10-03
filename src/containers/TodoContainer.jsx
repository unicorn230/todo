import React from 'react'
import {Todo} from "../components/Todo";

import s from '../stylesheets/todo.module.css'

export class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoData: [
                {
                    id: 0,
                    title: "title1",
                    description: "description 1",
                    status: "Todo",
                    date: "01.01.1970",
                    buttonText: "Start"
                },
                {
                    id: 1,
                    title: "title2",
                    description: "description 2",
                    status: "Todo",
                    date: "02.01.1970",
                    buttonText: "Start"
                },
                {
                    id: 2,
                    title: "title3",
                    description: "description 3",
                    status: "Todo",
                    date: "03.01.1970",
                    buttonText: "Start"
                },
                {
                    id: 3,
                    title: "title4",
                    description: "description 4",
                    status: "Todo",
                    date: "14.01.1970",
                    buttonText: "Start"
                },
                {
                    id: 4,
                    title: "title5",
                    description: "description 5",
                    status: "Todo",
                    date: "15.01.1970",
                    buttonText: "Start"
                }
            ]
        }
        this.updateStatus.bind(this)
    }

    updateStatus = (id, newStatus) => {
        this.setState({
            todoData: this.state.todoData.map(todo => id === todo.id ? {
                ...todo,
                status: todo.status === "Todo" ? "In Progress": todo.status === "In Progress" ? "Complete" : "Todo",
                buttonText: todo.buttonText === "Start" ? "Mark as complete": todo.buttonText === "Mark as complete" ? "Renew" : "Start",
            } : todo)
        })
    }

    mapTodoData = () => this.state.todoData.map((todo) => <Todo {...todo} updateStatus={this.updateStatus}/>)

    render() {
        return (
            <div className={s.content}>
                {this.mapTodoData()}
            </div>
        )
    }
}
