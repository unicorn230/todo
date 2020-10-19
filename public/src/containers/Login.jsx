import React from "react";
import {LoginComponent} from "../components/LoginComponent";

import axios from 'axios'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                login: "",
                password: ""
            }
        }
        this.eventHandler.bind(this);
    }

    sendAuthRequest = () => {
        axios.post('http://localhost:3001/login', {
            ...this.state.userData
        }).then((res) => {
            this.props.updateUserState(res.data)
        }).catch(e => console.error(e))
    }

    eventHandler = (event) => {
        switch (event.type) {
            case "UPDATE_USERNAME":
                this.setState({
                    userData: {...this.state.userData, login: event.value}
                })
                break;
            case "UPDATE_PASSWORD":
                this.setState({
                    userData: {...this.state.userData, password: event.value}
                })
                break;
            case "SEND_AUTH_REQUEST":
                this.sendAuthRequest();
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <LoginComponent {...this.state.userData} eventHandler={this.eventHandler}/>
        )
    }
}
