import React from 'react'
import s from "../stylesheets/list.module.css";



export default (props)=>{
    function renderTask(i){
        return(
            <div className={s.task} key={i.title}>
                <p>{i.title}</p>
                <p>{i.description}</p>
                <p>{i.date}</p>
            </div>
        )
    }
    function renderTasks (){
        let rendered = []
        for(let i of props.tasksList){
            rendered.push(renderTask(i))
        }
        console.log(rendered)
        return rendered;
    }
    return (
        <>
            {renderTasks()}
        </>
    )
}