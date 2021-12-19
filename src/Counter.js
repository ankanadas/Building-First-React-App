import React, {Component} from "react";
import { ThemeContext } from "./App";

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: props.initialCount
        }
    }
    render(){
        console.log("Render Counter");
        return (
            <ThemeContext>
                {style => (
                    <div>
                        <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick={() => this.changeCount(1)}>+</button>
                    </div>
                )}
            </ThemeContext>
        )
    }

    changeCount(amount){
        this.setState(previousState =>{
            return  { count: previousState.count + amount}
        })
    }
}