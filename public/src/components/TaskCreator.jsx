import React from "react";

import axios from 'axios'

import s from '../stylesheets/modal.module.css'

export default (props) => {
    const [title, updateTitle] = React.useState();
    const [description, updateDesc] = React.useState();
    const [date, updateDate] = React.useState();

    return (
        <form onSubmit={e => {
            e.preventDefault();

            axios.post('http://localhost:3001/createTask', {
                title,
                description,
                date,
            }).then(res => {
                console.log(res)
                this.props.createNewTask();
            }).catch(err => console.error(err))

            props.updateModalState(false)
        }} className={s.task_creator_wrapper}>
            <label htmlFor={'title'}>Название:</label>
            <input required name={'title'} value={title} onChange={e => updateTitle(e.target.value)} type={'text'}/>
            <label htmlFor={'desc'}>Описание:</label>
            <input required name={'desc'} value={description} onChange={e => updateDesc(e.target.value)} type={'text'}/>
            <label htmlFor={'date'}>Дедлайн:</label>
            <input required name={'date'} value={date} onChange={e => updateDate(e.target.value)} type={'date'}/>
            <button type={'submit'}>
                Создать!
            </button>
        </form>
    )
}
