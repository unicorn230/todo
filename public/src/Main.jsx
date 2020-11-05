import React, {Fragment} from "react";
import {Redirect, Route, Switch} from "react-router";
import MainPage from "./containers/MainPage";
import Modal from "./components/Modal";
import Menu from "./components/MenuComponent";
import Header from "./components/Header";
import CreateButton from "./components/CreateButton";

export class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            menuState: false,
            modalContent: () => null,
        }

        this.createNewTask.bind(this);
        this.handleMenuState.bind(this);
        this.updateModalContent.bind(this);
        this.updateModalState.bind(this);
    }

    createNewTask = () => {
        this.forceUpdate();
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
                <Menu handleMenuState={this.handleMenuState} state={`${this.state.menuState}`}/>
                <Header handleMenuState={this.handleMenuState}/>
                <CreateButton updateModalContent={this.updateModalContent} updateModalState={this.updateModalState} createNewTask={this.createNewTask}/>
                <Switch>
                    <Route exact path={'/create'}>
                        Create
                    </Route>
                    <Route menuState={`${this.state.menuState}`} exact path={'/list'}>

                    </Route>
                    <Route exact path={'/'}>
                        <MainPage menuState={`${this.state.menuState}`} modalHandlers={{
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
