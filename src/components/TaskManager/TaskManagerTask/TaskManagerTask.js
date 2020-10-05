import React from "react";
import classes from './TaskManagerTask.css'

const TaskManagerTask = (props) => {

  return (
    <li className={classes.TaskManagerTask}>
      <input onChange={(e) => {
        props.taskManager(e)
      }} id={props.id + '-title'} type="text" value={props.title} className={classes.TaskManagerTask_title}/>
      <div>
        <label htmlFor={props.id + '-kind'}>kind &nbsp;&nbsp;&nbsp;</label>
        <select defaultValue={props.kind} onChange={(e) => { props.taskManager(e)}} id={props.id + '-kind'} className={classes.TaskManagerTask_kind}>
          <option  value="Gym">Gym</option>
          <option  value="Business">Business</option>
          <option value="Education">Education</option>
        </select>
      </div>
      <div>
        <label htmlFor={props.id + '-countExercise'}>кол-во раз для успеха &nbsp;&nbsp;&nbsp;</label>
        <input onChange={(e) => {
          props.taskManager(e)
        }} id={props.id + '-countExercise'} type="number" value={props.countExercise}
               className={classes.TaskManagerTask_countExercise}/>
      </div>
      <div>
        <label htmlFor={props.id + '-step'}>step &nbsp;&nbsp;&nbsp;</label>
        <input onChange={(e) => {
          props.taskManager(e)
        }} id={props.id + '-step'} type="number" value={props.step} className={classes.TaskManagerTask_countExercise}/>
      </div>
      <div id={props.id + '-close'} onClick={(e)=>{props.removeTask(e)}} className={classes.TaskManagerTask_closetask}></div>
    </li>
  );
}

export default TaskManagerTask;