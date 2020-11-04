import React from "react";
import TaskCreator from "./TaskCreator";

export default (props) => (

    <span onClick={() => {
        props.updateModalContent(() => <TaskCreator updateModalState={props.updateModalState} createNewTask={props.createNewTask}/>)
        props.updateModalState(true);
    }} onMouseOver={e => {
              e.target.style.boxShadow = '10px 10px 11px -10px rgba(0,0,0,0.75)'
          }} onMouseLeave={e => {
        e.target.style.boxShadow = 'none'
    }} style={style}>+</span>
)


const style = {
    transition: "0.3s all",
    textAlign: "center",
    lineHeight: "50px",
    verticalAlign: "middle",
    cursor: "pointer",
    position: "fixed",
    bottom: "50px",
    right: "50px",
    background: "#2196F4",
    borderRadius: "100px",
    fontSize: '48px',
    color: "white",
    width: "60px",
    height: "60px"
}
