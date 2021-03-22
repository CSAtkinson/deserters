import React, { useState } from 'react'
import classes from './HomePage.module.css'
import Auxillary from '../../Auxillary/Auxillary'
import LogicBox from '../../LogicBox/LogicBox'

const HomePage = (props) => {
    const [boxes, setBoxes] = useState(Array(32).fill(0))
    const [codeArray, setCode] = useState(() => {
        let tempArray = Array(4).fill(0);
        for (var i = 0; i < 4; i++){
            tempArray[i] =  Math.floor(Math.random() * 9) + 1
        }
        return tempArray
    })        
    console.log(codeArray)
    const box = [...boxes]
    console.log(box)
    

    const handleChange = (e) => {
        e.preventDefault()     
        let tempArray = [...boxes]
        console.log(e.target.id)
        console.log(e.target.value)
        tempArray[e.target.id] = e.target.value;
        setBoxes({boxes: tempArray})
    }

    

    
    return(
        <Auxillary>
            <div>
                <ul className={classes.slideshow}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className={classes.header}>
                <p>CRACK THE CODE!!!</p>
            </div>
            <div className={classes.container}>
                <div className={classes.content}>Spacer</div>
                <div className={classes.center}>
                {box.map((input, i) => (
                    <LogicBox array={box} key={i} id={i} change={handleChange}/>
                ))}                
                </div>
                <div className={classes.content}>Spacer</div>               
            </div>             
        </Auxillary>
    )
    
};

export default HomePage