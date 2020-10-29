import React from "react";
import s from '../stylesheets/taskslist.module.css'
import TaskTile from "./TaskTile";


export default (props) => {
    return (
        <main className={s.wrapper}>
            <section className={s.tasks_wrapper}>
                {props.tasksList.map(t => {
                    return <TaskTile/>
                })}
            </section>
        </main>
    )
}
