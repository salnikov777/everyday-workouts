import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Nav.css'

const Nav = (props) => {
  return (
    <nav className={classes.Nav}>
      <ul>
        <li><NavLink exact activeStyle={{fontWeight: "bold", color: "yellow"}} to='/'>Gym</NavLink></li>
        <li><NavLink activeStyle={{fontWeight: "bold", color: "yellow"}} to='/business'>Business</NavLink></li>
        <li><NavLink activeStyle={{fontWeight: "bold", color: "yellow"}} to='/education'>Education</NavLink></li>
        <li><NavLink activeStyle={{fontWeight: "bold", color: "yellow"}} to='/taskmanager'>Task Manager</NavLink></li>
      </ul>
    </nav>


  );
}

export default Nav;