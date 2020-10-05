import React from "react";
import classes from './TaskManager.css'
import TaskManagerTask from "./TaskManagerTask/TaskManagerTask";

const TaskManager = (props) => {
  let tasksOrdered = props.tasks.sort((a, b)=> a.kind > b.kind);
  let tasks = tasksOrdered.map((item)=>{
    return <TaskManagerTask key={item.id} {...item} removeTask={props.removeTask} taskManager={props.taskManager}/>
  });
  return (
    <div className={classes.TaskManager}>
      <h2>Task manager</h2>
      <button onClick={props.addTask} className={classes.TaskManager_addtask}>Add task</button>
      <ul className={classes.TaskManager_container} >
        {tasks}
      </ul>
    </div>
  );
}

export default TaskManager;