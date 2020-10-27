import React, {Fragment} from "react";
import {Redirect, Route, Switch} from "react-router";
import MainPage from "./components/MainPage";
import Header from "./containers/Header";
import Modal from "./components/Modal";

export class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            modalContent: () => null,
        }

        this.updateModalContent.bind(this);
        this.updateModalState.bind(this);
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


    render() {
        return (
            <Fragment>
                <Header/>
                <Switch>
                    <Route exact path={'/create'}>
                        Create
                    </Route>
                    <Route exact path={'/list'}>
                        List
                    </Route>
                    <Route exact path={'/'}>
                        <MainPage modalHandlers={{
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
