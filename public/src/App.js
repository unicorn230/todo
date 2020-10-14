import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router";
import {TodoCreator} from "./containers/TodoCreator";
import {Link} from "react-router-dom";
import {Todo} from "./components/Todo";
import {TodoListComponent} from "./components/TodoListComponent";

export class App extends React.Component {
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
            ]
        }
        this.updateStatus.bind(this)
        this.addNewTodo.bind(this)
    }

    addNewTodo = (newTodo) => {
        this.setState({
            todoData: [...this.state.todoData, newTodo]
        },() => console.log(this.state.todoData))
    }

    updateStatus = (id, newStatus) => {
        this.setState({
            todoData: this.state.todoData.map(todo => id === todo.id ? {
                ...todo,
                status: todo.status === "Todo" ? "In Progress" : todo.status === "In Progress" ? "Complete" : "Todo",
                buttonText: todo.buttonText === "Start" ? "Mark as complete" : todo.buttonText === "Mark as complete" ? "Renew" : "Start",
            } : todo)
        })
    }

    mapTodoData = () => this.state.todoData.map((todo) => <Todo {...todo} updateStatus={this.updateStatus}/>)

    render() {
        return (
            <Switch>
                <Route exact path={'/todoList'}>
                    <TodoListComponent todoList={this.mapTodoData()}/>
                </Route>
                <Route exact path={'/addNewTodo'}>
                    <TodoCreator addNewTodo={this.addNewTodo}/>
                </Route>
                <Route exact path={'/'}>
                    <Link to={'/todoList'}>Todo List</Link>
                    <Link to={'/addNewTodo'}>Create TODO</Link>
                </Route>
                <Route path={'/'} component={() => Redirect('/')}/>
            </Switch>
        )
    }
}

export default App;
