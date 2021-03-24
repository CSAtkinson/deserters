import React from 'react'
import classes from './LogicBox.module.css'

const LogicBox = (props) => (
    <input className={classes.content} onChange={props.change} id={props.id} maxLength="1" type="text" />
);

export default LogicBox