import React from "react";

import s from '../stylesheets/main.module.css'
import TaskTile from "./TaskListTile";
import Modal from "./Modal";

export default (props) => {
    return (
        <main className={s.wrapper}>
            <div className={s.tasks_wrapper}>
                <p>Просроченые:</p>
                <TaskTile modalHandlers={props.modalHandlers} date={'01/02/03'} description={'asdfasdf'} title={'asd'}
                          status={0} displayType={0}/>
                <TaskTile modalHandlers={props.modalHandlers} date={'01/02/03'} description={'asdfasdf1'} title={'asd1'}
                          status={0} displayType={0}/>
                <TaskTile modalHandlers={props.modalHandlers} date={'01/02/03'} description={'asdfasdf2'} title={'asd2'}
                          status={0} displayType={0}/>
                <TaskTile modalHandlers={props.modalHandlers} date={'01/02/03'} description={'asdfasdf3'} title={'asd3'}
                          status={0} displayType={0}/>
            </div>
            <div className={s.tasks_wrapper}>
                <p>Активные:</p>
            </div>
            <div className={s.tasks_wrapper}>
                <p>На выполнение:</p>
            </div>
            <div className={s.tasks_wrapper}>
                <p>Done:</p>
            </div>
        </main>
    )
}
