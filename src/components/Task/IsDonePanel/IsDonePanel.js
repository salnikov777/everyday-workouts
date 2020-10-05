import React from "react";
import classes from './IsDonePanel.css'

const IsDonePanel = (props) => {

  let imgSrc = '';

  if(props.isDone){
    imgSrc = '/img/done.png';
  }else{
    imgSrc = '/img/close.png';
  }

  return (
    <div className={classes.IsDonePanel}>
      <img src={imgSrc} alt=""/>
    </div>
  );
}

export default IsDonePanel;