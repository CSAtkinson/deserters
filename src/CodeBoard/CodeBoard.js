import React from 'react'
import LogicBox from '../LogicBox/LogicBox'
import classes from './CodeBoard.module.css'

const CodeBoard = ({board, handleChange, color}) => {   

    return (
        <div className={classes.center}>
            {board.map((input, i) => (
                <LogicBox color={color} key={i} id={i} change={handleChange}/>
            ))}                
        </div>   
    
    );
}
export default CodeBoard