import React from 'react'
import s from '../stylesheets/todo.module.css'

export const TodoTile = (props) => { // Dump component - отрисовка
    return (
        <div className={s.wrapper}>
            <h2>{props.tile}</h2>
            <p>{props.description}</p>
            <p>{props.deadline}</p>
            <p>{props.status}</p>
            <button onClick={() => props.changeStatus("Сделано")}>Mark is complete</button>
        </div>
    )
}
