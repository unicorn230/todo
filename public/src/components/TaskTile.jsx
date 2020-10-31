import React from "react";

import s from '../stylesheets/task.module.css'

export default (props) => {
    const closeButton = <button className={s.close_button} onClick={() => {
        props.modalHandlers.updateModalState(false)
    }}>close</button>
    return (
        <div className={s.task_wrapper}>

            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.date}</p>
            <div className={s.buttons}>{closeButton}</div>
        </div>
    )
}
