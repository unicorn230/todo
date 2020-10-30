import React from "react";

import s from '../stylesheets/main.module.css'
import TaskListTile from "./TaskListTile";



export default (props) => {
    return (
        <main menustate={props.menuState} className={s.wrapper}>
            <div className={s.tasks_wrapper}>
                <p>Просроченные:</p>
                {props.tasksList.filter(t => t.status !== 2 && (Date.parse(t.date) < Date.now())).map(t => <TaskListTile
                    key={t.id}
                    blockStatus={'0'}
                    modalHandlers={props.modalHandlers} {...t}/>)}
            </div>
            <div status={`1`} className={s.tasks_wrapper}>
                <p>Активные:</p>
                {props.tasksList.filter(t => t.status === 1 && Date.parse(t.date) > Date.now()).map(t => <TaskListTile
                    key={t.id}
                    blockStatus={'1'}
                    modalHandlers={props.modalHandlers} {...t}/>)}
            </div>
            <div status={`2`} className={s.tasks_wrapper}>
                <p>На выполнение:</p>
                {props.tasksList.filter(t => t.status === 0 && Date.parse(t.date) > Date.now()).map(t => <TaskListTile
                    key={t.id}
                    blockStatus={'2'}
                    modalHandlers={props.modalHandlers} {...t}/>)}
            </div>
            <div status={`3`} className={s.tasks_wrapper}>
                <p>Выполненные:</p>
                {props.tasksList.filter(t => t.status === 2).map(t => <TaskListTile
                    key={t.id}
                    blockStatus={'3'}
                    modalHandlers={props.modalHandlers} {...t}/>)}
            </div>
        </main>
    )
}
