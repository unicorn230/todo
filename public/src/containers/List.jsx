import React from 'react'
import s from '../stylesheets/list.module.scss'
import ListComponent from '../components/ListComponent'
import axios from "axios";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            tasksList: [],
            tesksToGet: 0
        }
    }



    componentDidMount() {
        this.getSomeTasks(10)
    }

    updateTasksList = (newTasks) => {
        this.setState({
            tasksList: [...this.state.tasksList, ...newTasks.map(t => JSON.parse(t))],
        }, )
    }

    getSomeTasks(n){
        axios.get('http://localhost:3001/getSomeTasks', {params: {got: this.state.tasksList.length, get: this.state.tasksList.length+n}}).then(res => this.updateTasksList(res.data))
    }

    handleForm(e){
        e.preventDefault()
        this.getSomeTasks(parseInt(this.state.tasksToGet))
        this.setState({
            tasksToGet: ""
        })
    }

    render(){
        return(
            <div className={s.list_wrapper}>
                <ListComponent tasksList ={this.state.tasksList}/>
                <div className={s.list_menu}>
                    <div><button onClick={()=> this.getSomeTasks(10)}>+10</button></div>
                    <div><button onClick={()=> this.getSomeTasks(20)}>+20</button></div>
                    <div>
                        <form onSubmit={(e)=> this.handleForm(e)} action="">
                            <input type="text" value={this.state.tasksToGet}  onChange={e => this.setState({tasksToGet: e.target.value})}/>
                            <button type='submit'>+</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
