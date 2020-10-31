import React from "react";

import s from '../stylesheets/modal.module.css'

export default (props) => {
    const [title, updateTitle] = React.useState();
    const [description, updateDesc] = React.useState();
    const [date, updateDate] = React.useState();

    return (
        <form onSubmit={e => {
            e.preventDefault();
            props.createNewTask({
                title,
                description,
                date
            })
            props.updateModalState(false)
        }} className={s.task_creator_wrapper}>
            <input placeholder={"название"} required name={'title'} onChange={e => updateTitle(e.target.value)} type={'text'}/>
            <input placeholder={"описание"}  required name={'desc'}  onChange={e => updateDesc(e.target.value)} type={'text'}/>
            <input placeholder={"дата"} required name={'date'}  onChange={e => updateDate(e.target.value)} type={'date'}/>
            <div className={s.buttons}>
                <button className={s.submit} type={'submit'}>
                    apply
                </button>
                <button onClick={()=> {props.updateModalState(false)}} className={s.close_button}>close</button>
            </div>
        </form>
    )
}
