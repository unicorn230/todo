import React from 'react'

import s from '../stylesheets/todo.module.css'

export const TodoListComponent = (props) => {
    return (
        <div className={s.content}>
            {props.todoList}
        </div>
    )
}
