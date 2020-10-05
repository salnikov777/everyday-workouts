import React, {Component} from 'react';
import classes from './MyWorkouts.css'
import {Route, Switch, Redirect} from 'react-router-dom'
import TaskContainer from "../../components/TaskContainer/TaskContainer";
import TaskManager from "../../components/TaskManager/TaskManager";
import randomId from 'random-id';

class MyWorkouts extends Component {
  constructor(props) {
    super(props);

    this.state = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : null;

    if (!this.state) {
      this.state = {
        tasks: []
      }
    }


  }

  onChangeHandlerPushUp(id) {

    let tasks = [...this.state.tasks];

    tasks.forEach((task, i) => {
      if (task.id === id) {
        task.currentCount = task.currentCount + task.step;
      }
    });
    this.setState({tasks});

  }

  clearPushup(e) {
    e.preventDefault();
    let tasks = [...this.state.tasks];
    console.log(e.target.id);
    let id = +e.target.id;
    tasks.forEach((task, i) => {
      if (task.id === id) {
        task.currentCount = 0;
      }
    });
    this.setState({tasks});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  resetResults(e) {
    e.preventDefault();
    if (e.altKey) {
      let tasks = this.state.tasks.map((item) => {
        let newItem = {...item};
        newItem.currentCount = 0;
        return newItem;
      });
      this.setState({tasks});
    }

  }

  taskManager(e) {
    let id = parseInt(e.target.id);
    let kind = e.target.id.split('-')[1];
    let newTasks = this.state.tasks.map((item) => {
      let itemClone = {...item};
      if (item.id !== id) {
        return itemClone;
      }

      itemClone[kind] = e.target.value;

      return itemClone;
    });

    this.setState({tasks: newTasks});
  }

  removeTask(e){
    let id = parseInt(e.target.id);
    console.log(id);

    let newTasks = this.state.tasks.filter((item) => {
      return item.id !== id;
    });

    this.setState({tasks: newTasks});

  }

  addTask(){
    let tasks = this.state.tasks;
    tasks.push({
      id: +randomId(5 , '0'),
      kind: 'Gym',
      currentCount: 0,
      countExercise: 1,
      title: 'Task',
      step: 1
    });
    this.setState({tasks});
  }


  render() {
    return (
      <div className={classes.MyWorkouts}>
        <h1 onClick={this.resetResults.bind(this)}>My everyday workouts</h1>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <TaskContainer kind="Gym" clearPushup={this.clearPushup.bind(this)}
                                         onChangeHandlerPushUp={this.onChangeHandlerPushUp.bind(this)}
                                         tasks={this.state.tasks}/>}
          />
          <Route
            path="/education"
            render={() => <TaskContainer kind="Education" clearPushup={this.clearPushup.bind(this)}
                                         onChangeHandlerPushUp={this.onChangeHandlerPushUp.bind(this)}
                                         tasks={this.state.tasks}/>}
          />
          <Route
            path="/business"
            render={() => <TaskContainer kind="Business" clearPushup={this.clearPushup.bind(this)}
                                         onChangeHandlerPushUp={this.onChangeHandlerPushUp.bind(this)}
                                         tasks={this.state.tasks}/>}
          />
          <Route
            path="/taskmanager"
            render={() => <TaskManager
              taskManager={this.taskManager.bind(this)}
              removeTask={this.removeTask.bind(this)}
              addTask={this.addTask.bind(this)}
              tasks={this.state.tasks}/>}
          />
          <Redirect to="/"/>
        </Switch>

      </div>
    );
  }
}

export default MyWorkouts;