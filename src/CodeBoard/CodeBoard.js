import React, { Component, useState } from 'react'
import LogicBox from '../LogicBox/LogicBox'
import classes from './CodeBoard.module.css'

class CodeBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bgColor: ''
        };
      }

    

    render(){
        return(
            <div className={classes.center}>
            {this.props.board.map((input, i) => (
                <LogicBox isCorrect={this.props.correct} color={this.state.bgColor} key={i} id={i} change={this.props.handleChange}/>
            ))}
            </div>   
        )
    }
    

   

    
}
export default CodeBoard