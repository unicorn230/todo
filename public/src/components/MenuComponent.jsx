import React from "react";
import s from '../stylesheets/menu.module.css'
import {Link} from "react-router-dom";

export default (props) => {
    return (
        <section state={props.state} className={s.wrapper}>
            <Link onClick={props.handleMenuState} to={'/'}>Главная</Link>
            <Link onClick={props.handleMenuState} to={'/list'}>Все задачи!</Link>
            <Link onClick={props.handleMenuState} to={'/create'}>Создать задачу</Link>
            <Link onClick={props.handleMenuState} to={'/signout'}>Выйти</Link>
        </section>
    )
}
