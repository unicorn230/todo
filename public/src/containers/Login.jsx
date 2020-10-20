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
            },
            isDataValid: true
        }
        this.eventHandler.bind(this);
    }


    sendAuthRequest = () => {
        axios.post('http://localhost:3001/login', {
            ...this.state.userData
        }).then((res) => {
            this.props.updateUserState(res.data)
            this.updateDataState(res.data)
        }).catch(e => console.error(e))
    }

    sendRegRequest = ()=>{
        axios.post('http://localhost:3001/reg', {
            ...this.state.userData
        }).then((res) => {
            this.props.updateUserState(res.data)
            this.updateDataState(res.data)
        }).catch(e => console.error(e))
    }

    updateDataState = (data) => {
        this.setState({
            isDataValid: data.isDataValid
        })
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
                this.updateDataState({isDataValid: true})
                this.sendAuthRequest();
                break;
            case "SEND_REG_REQUEST":
                this.updateDataState({isDataValid: true})
                this.sendRegRequest();
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <LoginComponent isDataValid={this.state.isDataValid}  eventHandler={this.eventHandler}/>
        )
    }
}
