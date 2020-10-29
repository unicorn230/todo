import React from "react";

import s from '../stylesheets/header.module.css'

const Header = (props) => {
    return (
        <header className={s.header_wrapper}>
            <button onClick={props.handleMenuState}>Меню</button>
        </header>
    )
}

export default Header;
