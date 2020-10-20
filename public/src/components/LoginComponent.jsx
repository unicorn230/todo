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
                }}  type={'username'} name={'login'}/>
            </fieldset>
            <fieldset className={s.filedSet}>
                <label htmlFor={'password'}>Password</label>
                <input onChange={(e) => {
                    props.eventHandler({type: "UPDATE_PASSWORD", value: e.target.value})
                }} type={'password'} name={'password'}/>
            </fieldset>
            <fieldset className={s.filedSet}>
                <button onClick={() => {
                    props.eventHandler({type: "SEND_AUTH_REQUEST"})
                }} className={s.accept}>ВОЙТИ</button>
                <button onClick={() => {
                    props.eventHandler({type: "SEND_REG_REQUEST"})
                }} className={s.accept}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </fieldset>
            
            {
                props.isDataValid ? null : <span className={s.warning}>некорректные данные</span>
            }
            


        </div>
    )
}
