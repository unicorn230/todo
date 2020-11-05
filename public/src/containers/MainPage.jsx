import React from "react";

import s from '../stylesheets/main.module.css'

import TaskListTile from "../components/TaskListTile";

import axios from 'axios'

export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tasksList: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:3001/getAllTasks').then(res => this.updateTasksList(res.data))
    }

    updateTasksList = (newTasks) => {
        this.setState({
            tasksList: newTasks.map(t => JSON.parse(t))
        }, () => console.log(this.state.tasksList))
    }


    render() {
        return(

            <main menustate={this.props.menuState} className={s.wrapper}>
                <div className={s.tasks_wrapper}>
                    <p>Просроченые:</p>
                    {this.state.tasksList.filter(t => t.status !== 2 && (Date.parse(t.date) < Date.now())).map(t => <TaskListTile
                        blockStatus={'0'}
                        modalHandlers={this.props.modalHandlers} {...t}/>)}
                </div>
                <div status={`1`} className={s.tasks_wrapper}>
                    <p>Активные:</p>
                    {this.state.tasksList.filter(t => t.status === 1 && Date.parse(t.date) > Date.now()).map(t => <TaskListTile
                        blockStatus={'1'}
                        modalHandlers={this.props.modalHandlers} {...t}/>)}
                </div>
                <div status={`2`} className={s.tasks_wrapper}>
                    <p>На выполнение:</p>
                    {this.state.tasksList.filter(t => t.status === 0 && Date.parse(t.date) > Date.now()).map(t => <TaskListTile
                        blockStatus={'2'}
                        modalHandlers={this.props.modalHandlers} {...t}/>)}
                </div>
                <div status={`3`} className={s.tasks_wrapper}>
                    <p>Done:</p>
                    {this.state.tasksList.filter(t => t.status === 2).map(t => <TaskListTile
                        blockStatus={'3'}
                        modalHandlers={this.props.modalHandlers} {...t}/>)}
                </div>
            </main>
        )
    }
}
