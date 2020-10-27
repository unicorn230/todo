import React, {Fragment} from "react";
import Header from '../components/HeaderComponent'
import Menu from "../components/MenuComponent";


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuState: false,
        }

        this.handleMenuState.bind(this);
    }

    handleMenuState = () => {
        this.setState({
            menuState: !this.state.menuState
        }, () => console.log(this.state))
    }

    render() {
        return (
            <Fragment>
                <Header menuStateHandler={this.handleMenuState}/>
                <Menu state={`${this.state.menuState}`}/>
            </Fragment>
        );
    }

}
