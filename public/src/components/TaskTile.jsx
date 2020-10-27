import React from "react";

import s from '../stylesheets/task.module.css'

export default (props) => {
    const closeButton = <button onClick={() => {
        props.modalHandlers.updateModalState(false)
    }}>Закрыть меня</button>
    return (
        <div className={s.task_wrapper}>
            {closeButton}
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>
    )
}
