import React from "react";
import {Creator} from "../components/CreatorComponent";

export class TodoCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            description: "",
            status: "",
            date: "",
            buttonText: "",
        }

        this.actionHandler.bind(this);
    }

    actionHandler = (action) => {
        switch (action.type) {
            case "UPDATE_ID":
                this.setState({id: action.value})
                break;
            case "UPDATE_TITLE":
                this.setState({title: action.value})
                break;
            case "UPDATE_DESC":
                this.setState({description: action.value})
                break;
            case "UPDATE_STATUS":
                this.setState({status: action.value})
                break;
            case "UPDATE_DATE":
                this.setState({date: action.value})
                break;
            case "UPDATE_BUTTON":
                this.setState({buttonText: action.value})
                break;
            case "PUSH_NEW_TODO":
                alert("TASK WAS ADDED");
                this.props.addNewTodo(this.state)
                this.setState({
                    id: "",
                    title: "",
                    description: "",
                    status: "",
                    date: "",
                    buttonText: "",
                })
                break;
            default: throw new Error(`BAD ACTION TYPE: ${action.type}`)
        }
    }

    render() {
        return <Creator actionHandler={this.actionHandler} {...this.state}/>
    }
}
