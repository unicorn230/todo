import React from "react";
import clear from '../assets/clear.svg'
import menu from '../assets/menu.svg'

import s from '../stylesheets/header.module.css'

const Header = (props) => {
    return (
        <header className={s.header_wrapper}>
            <button onClick={props.handleMenuState}><img className={s.menu_icon} src={props.menuState ? clear : menu} alt=""/></button>
        </header>
    )
}

export default Header;
