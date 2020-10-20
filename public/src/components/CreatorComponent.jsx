import React from "react";

import s from '../stylesheets/creator.module.css'
import {Link} from "react-router-dom";

export const Creator = (props) => {
    return (
        <div className={s.wrapper}>
            <h2>Create new TODO</h2>
            <input value={props.id}
                   onChange={(e) => props.actionHandler({type: "UPDATE_ID", value: e.target.value})}
                   placeholder={"ID"} type={"text"}/>
            <input value={props.title}
                   onChange={(e) => props.actionHandler({type: "UPDATE_TITLE", value: e.target.value})}
                   placeholder={"TITLE"} type={"text"}/>
            <input value={props.description}
                   onChange={(e) => props.actionHandler({type: "UPDATE_DESC", value: e.target.value})}
                   placeholder={"DESCRIPTION"} type={"text"}/>
            <select onChange={(e) => props.actionHandler({
                type: "UPDATE_STATUS", value: e.target.value
            })} value={props.status}>
                <option disabled>Статус</option>
                <option value="To Do" selected>Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
            </select>
            <input value={props.date}
                   onChange={(e) => props.actionHandler({type: "UPDATE_DATE", value: e.target.value})}
                   type={"date"}/>
            <input value={props.buttonText}
                   onChange={(e) => props.actionHandler({type: "UPDATE_BUTTON", value: e.target.value})}
                   placeholder={"BUTTON TEXT"} type={"text"}/>
            <input onClick={() => props.actionHandler({type: "PUSH_NEW_TODO"})} type={"submit"}/>
            <Link to={'/todoList'}> GO TO TODO LIST</Link>
        </div>
    )
}

