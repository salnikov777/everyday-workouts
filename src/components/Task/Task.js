import React from "react";
import classes from './Task.css';
import IsDonePanel from "./IsDonePanel/IsDonePanel";

const Task = (props) => {
  return (
    <li className={classes.Task}>
      <label className={classes.Task_label} htmlFor={props.id}>{props.title}</label>
      <div className={classes.Task_info}>
        <input
          className={classes.Task_input}
          onContextMenu={
            (e) => {
              props.clearPushup(e)
            } }
          onChange={(e) => {
            props.onChangeHandlerPushUp(+e.target.id)
          }}
          id={props.id} type="number"
          value={props.currentCount}
          placeholder="0"/>
        <IsDonePanel isDone={props.currentCount >= props.countExercise}/>
      </div>


    </li>

  );
}

export default Task;