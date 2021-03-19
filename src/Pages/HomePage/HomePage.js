import React, { useState } from 'react'
import classes from './HomePage.module.css'
import Auxillary from '../../Auxillary/Auxillary'

const HomePage = (props) => {
    const [boxes, setBoxes] = useState(Array(32).fill(0))
    let box = [...boxes]

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
            <div>
                <p>CRACK THE CODE!!!</p>
            </div>
            <div>
                {box.map((input, i) => (
                    <input className={classes.box} key={i} id={i} maxLength="1" type="text" />
                ))}
            </div>             
        </Auxillary>
    )
    
};

export default HomePage