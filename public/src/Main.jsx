import React, {Fragment} from "react";
import {Redirect, Route, Switch} from "react-router";
import MainPage from "./components/MainPage";
import Modal from "./components/Modal";
import Menu from "./components/MenuComponent";
import Header from "./components/Header";
import CreateButton from "./components/CreateButton";

export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tasksList: [
                {
                    id: 0,
                    title: "new title",
                    description: "Some description",
                    date: `2010-10-16`,
                    status: 0 // 0 - на выполение, 1 - в процесе, 2 - сделали
                },
                {
                    id: 1,
                    title: "new title",
                    description: "Some description",
                    date: `2010-10-16`,
                    status: 0 // 0 - на выполение, 1 - в процесе, 2 - сделали
                },
                {
                    id: 2,
                    title: "new title",
                    description: "Some description",
                    date: `2010-10-16`,
                    status: 0 // 0 - на выполение, 1 - в процесе, 2 - сделали
                },
                {
                    id: 3,
                    title: "2020-10-31",
                    description: "Some description",
                    date: `2020-10-31`,
                    status: 0 // 0 - на выполение, 1 - в процесе, 2 - сделали
                },
                {
                    id: 4,
                    title: "2020-10-31",
                    description: "Some description",
                    date: `2020-10-31`,
                    status: 1 // 0 - на выполение, 1 - в процесе, 2 - сделали
                },
                {
                    id: 5,
                    title: "2020-10-31",
                    description: "Some description",
                    date: `2020-10-31`,
                    status: 2 // 0 - на выполение, 1 - в процесе, 2 - сделали
                },
            ],
            isModalOpen: false,
            menuState: false,
            modalContent: () => null,
        }

        this.createNewTask.bind(this);
        this.handleMenuState.bind(this);
        this.updateModalContent.bind(this);
        this.updateModalState.bind(this);
    }

    createNewTask = (task = {
        title: '',
        description: '',
        date: '',
    }) => {
        this.setState({
            tasksList: [...this.state.tasksList, {
                id: this.state.tasksList.length,
                status: 0,
                ...task,
            }]
        }, () => console.log(this.state))
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
        console.log('123')
        this.setState({
            menuState: !this.state.menuState
        }, () => console.log(this.state))
    }


    render() {
        return (
            <Fragment>
                <Menu state={`${this.state.menuState}`}/>
                <Header handleMenuState={this.handleMenuState}/>
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
