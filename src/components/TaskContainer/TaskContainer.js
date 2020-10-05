import React from "react";
import classes from './TaskContainer.css'
import Task from "../Task/Task";

const TaskContainer = (props) => {

  let tasks = [...props.tasks];

  tasks = tasks.map((item, idx) => {

    if(item.kind === props.kind){
      return (<Task clearPushup={props.clearPushup} onChangeHandlerPushUp={props.onChangeHandlerPushUp} key={idx} {...item}/>)
    }else{
      return null;
    }
  });
  return (
    <div className={classes.TaskContainer}>
      <h2>{props.kind}</h2>
      <ul className={classes.TaskContainer_container}>
        {tasks}
      </ul>
    </div>
  );
}

export default TaskContainer;