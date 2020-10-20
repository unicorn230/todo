import React, {Fragment} from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router";
import {TodoCreator} from "./containers/TodoCreator";
import {Link} from "react-router-dom";
import {Todo} from "./components/Todo";
import {TodoListComponent} from "./components/TodoListComponent";
import Login from "./containers/Login";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userState: {
                isUserLogin: false,
            },
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
        this.updateUserState.bind(this)
        this.updateStatus.bind(this)
        this.addNewTodo.bind(this)
    }

    addNewTodo = (newTodo) => {
        this.setState({
            todoData: [...this.state.todoData, newTodo]
        }, () => console.log(this.state.todoData))
    }

    updateUserState = (newState) => {
        this.setState({
            userState: newState
        }, () => {
            console.log(this.state.userState.isUserLogin)
        })
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
                {!this.state.userState.isUserLogin ? (
                        <Route exact path={'/login'}>
                            <Login updateUserState={this.updateUserState}/>
                        </Route>

                ): <Route path={'/login'} component={() => Redirect('/todoList')}/> }
                
                <Route exact path={'/'}>
                    <Link to={'/login'}>Войти</Link>
                    <Link to={'/addNewTodo'}>Create TODO</Link>
                    <Link to={'/todoList'}>Todo List</Link>
                </Route>
                {this.state.userState.isUserLogin ? (
                    <Fragment>
                        <Route exact path={'/todoList'}>
                            <TodoListComponent todoList={this.mapTodoData()}/>
                        </Route>
                        <Route exact path={'/addNewTodo'}>
                            <TodoCreator addNewTodo={this.addNewTodo}/>
                        </Route>
                    </Fragment>
                ) : null}
                <Route path={'/'} component={() => Redirect('/')}/>
            </Switch>
        )
    }
}

export default App;
