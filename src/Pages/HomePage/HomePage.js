import React, { Component } from 'react'
import classes from './HomePage.module.css'
import Auxillary from '../../Auxillary/Auxillary'

import CodeBoard from '../../CodeBoard/CodeBoard'

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          boxes: Array(32).fill(null),
          codeArray: Array(4).fill(null),
          isCorrect: false
        };
    }

    componentDidMount() {
        this.setNewCode()
    }

    setNewCode(){
        let tempArray = Array(4).fill(0);
        for (var i = 0; i < 4; i++){
            tempArray[i] =  Math.floor(Math.random() * 9) + 1
        }
        this.setState({codeArray: tempArray})
        //console.log(this.state.codeArray)
    }

    disableBoxes() {
        
    }

    handleChange = (e) => {            
        let tempArray = [...this.state.boxes]        
        tempArray[e.target.id] = parseInt(e.target.value);
        this.setState({boxes: tempArray}, ()=> {
            const found = this.state.boxes.some(r=> this.state.codeArray.indexOf(r) >= 0)
            console.log(found)
            console.log(this.state.codeArray[e.target.id] + " code array value")
            if(found){
                e.target.style.backgroundColor = "red"
                if (this.state.codeArray[e.target.id] === parseInt(e.target.value)){
                    e.target.style.backgroundColor = "green"
                }                
            }
            
        })
        console.log(this.state.codeArray)
        console.log(e.target.id + " id")
        console.log(e.target.value + " value")
    }

    runTest(index){
        let tempArray = [this.state.boxes]
        console.log(this.state.boxes[index])
        console.log(tempArray)        
    }
    

    render(){        
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
                    <CodeBoard correct={this.state.isCorrect} board={this.state.boxes} handleChange={this.handleChange}/>
                    <div className={classes.content}>Spacer</div>               
                </div>             
            </Auxillary>
        )
    }
};

export default HomePage