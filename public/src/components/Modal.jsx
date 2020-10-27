import React from "react";
import ReactDOM from 'react-dom'

import s from '../stylesheets/modal.module.css'

export default (props) => {
    if (props.isModalOpen) {
        document.body.style.overflow = 'hidden'
        return (
            ReactDOM.createPortal(
                <section className={s.modal_wrapper}>
                    <props.content/>
                </section>, document.body)
        )
    }
    document.body.style.overflow = 'auto'
    return null
}
