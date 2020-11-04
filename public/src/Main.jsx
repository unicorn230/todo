import React, {Fragment} from "react";
import {Redirect, Route, Switch} from "react-router";
import MainPage from "./components/MainPage";
import Modal from "./components/Modal";
import Menu from "./components/MenuComponent";
import Header from "./components/Header";
import CreateButton from "./components/CreateButton";
import axios from 'axios'

export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tasksList: [],
            isModalOpen: false,
            menuState: false,
            modalContent: () => null,
        }

        this.createNewTask.bind(this);
        this.handleMenuState.bind(this);
        this.updateModalContent.bind(this);
        this.updateModalState.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/TaskList')
            .then( res => this.setState({
                tasksList: res.data
            }) )
    }

    createNewTask = (task = {
        title: '',
        description: '',
        date: '',
    }) => {
        axios.post('http://localhost:3001/addTask', {...task, status: 0})
            .then(res => {
                if (res.data.isTaskAdded) {
                    this.setState({
                        tasksList: [...this.state.tasksList, {
                            ...task,
                            id: this.state.tasksList.length,
                            status: 0
                        }]
                    })
                }})
            .catch(err => console.log(err))
    }

    updateModalState = (newModalState) => {
        this.setState({
            isModalOpen: newModalState
        })
    }

    updateModalContent = (newModalContent) => {
        this.setState({
            modalContent: newModalContent
        })
    }

    handleMenuState = () => {
        this.setState({
            menuState: !this.state.menuState
        })
    }


    render() {
        return (
            <Fragment>
                <Menu state={`${this.state.menuState}`}/>
                <Header menuState={this.state.menuState} handleMenuState={this.handleMenuState}/>
                <CreateButton updateModalContent={this.updateModalContent} updateModalState={this.updateModalState} createNewTask={this.createNewTask}/>
                <Switch>
                    <Route exact path={'/create'}>
                        Create
                    </Route>
                    <Route menuState={`${this.state.menuState}`} tasksList={this.state.tasksList} exact path={'/list'}>

                    </Route>
                    <Route exact path={'/'}>
                        <MainPage tasksList={this.state.tasksList} menuState={`${this.state.menuState}`} modalHandlers={{
                            updateModalContent: this.updateModalContent,
                            updateModalState: this.updateModalState,
                        }}/>
                    </Route>
                    <Route exact path={'/'} component={() => Redirect('/')}/>
                </Switch>
                <Modal isModalOpen={this.state.isModalOpen} content={this.state.modalContent}/>
            </Fragment>
        )
    }
}
