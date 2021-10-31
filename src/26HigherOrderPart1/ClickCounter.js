
import React, { Component } from 'react'

 class ClickCounter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     incrementCount=()=>{
         this.setState(preState =>{
             return {count:preState.count+1}
         })
     }
    render() {
        const {count}=this.state
   
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked  {this.state.count}times</button>
                <button onClick={this.incrementCount}>Clicked  times{count}</button>
            </div>
        )
    }
}

export default ClickCounter
