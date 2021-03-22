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
          inputColor: ''
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

    handleChange = (e) => {            
        let tempArray = [...this.state.boxes]        
        tempArray[e.target.id] = parseInt(e.target.value);
        this.setState({boxes: tempArray}, ()=> {this.runTest(e.target.id)})
        console.log(this.state.codeArray)
    }

    runTest(index){
        console.log(this.state.boxes[index])
        if (this.state.boxes.includes(this.state.codeArray[0]) || this.state.boxes.includes(this.state.codeArray[1]) || this.state.boxes.includes(this.state.codeArray[2]) || this.state.boxes.includes(this.state.codeArray[3])){
            
        }
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
                    <CodeBoard color={this.state.inputColor} board={this.state.boxes} handleChange={this.handleChange}/>
                    <div className={classes.content}>Spacer</div>               
                </div>             
            </Auxillary>
        )
    }
};

export default HomePage