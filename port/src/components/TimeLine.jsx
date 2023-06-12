import React from 'react'
import classes from './modules/timeline.module.css'
export default function TimeLine() {
  return (
    <React.Fragment>
      <div className={classes.timeline}>
        <div className={classes.container}></div>
        <div className={classes.text}>
          <h4>Company Name</h4>
          <small>2021 - 2022</small>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tempore sed, quibusdam temporibus itaque amet, doloribus culpa minus labore voluptatem voluptatum facilis vero sequi eum quos libero ducimus cumque. Ut!</p>

        </div>
      </div>
    </React.Fragment>
  )
}
