import React from "react";

import s from '../stylesheets/header.module.css'

export default (props) => {
    return (
        <header className={s.header_wrapper}>
            <button onClick={props.menuStateHandler}>Меню</button>
        </header>
    )
}
