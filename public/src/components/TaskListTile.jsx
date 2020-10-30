import React from "react";

import s from '../stylesheets/task.module.css'
import TaskTile from "./TaskTile";

export default (props) => {

    return (
        <div blockstatus={props.blockStatus} onClick={() => {
            props.modalHandlers.updateModalContent(() => <TaskTile {...props}/>)
            props.modalHandlers.updateModalState(true)
        }} className={s.inline_task_wrapper}>
            <p className={s.task_title}>{props.title}</p>
            <p className={s.task_date}>{props.date}</p>
        </div>
    )
}
