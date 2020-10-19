import React from "react";
import s from '../stylesheets/login.module.css'


export const LoginComponent = (props) => {
    return (
        <div className={s.wrapper}>
            <h2>TODO LOGIN</h2>
            <fieldset className={s.filedSet}>
                <label htmlFor={'login'}>Login</label>
                <input onChange={(e) => {
                    props.eventHandler({type: "UPDATE_USERNAME", value: e.target.value})
                }} value={props.login} type={'username'} name={'login'}/>
            </fieldset>
            <fieldset className={s.filedSet}>
                <label htmlFor={'password'}>Password</label>
                <input onChange={(e) => {
                    props.eventHandler({type: "UPDATE_PASSWORD", value: e.target.value})
                }} value={props.password} type={'password'} name={'password'}/>
            </fieldset>
            <button onClick={() => {
                props.eventHandler({type: "SEND_AUTH_REQUEST"})
            }} className={s.accept}>ВОЙТИ</button>
        </div>
    )
}
