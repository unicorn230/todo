import React from 'react'

import s from '../stylesheets/todo.module.css'

export const Todo = (props) => {
    return (
        <div status={props.status} className={s.wrapper}>
            <h1>Header: {props.title}</h1>
            <p>Description: {props.description}</p>
            <p>Exp. date: {props.date}</p>
            <p>Status: {props.status}</p>
            <button onClick={() => props.updateStatus(props.id, "Complete")}> Make complete </button>
        </div>
    )
}
