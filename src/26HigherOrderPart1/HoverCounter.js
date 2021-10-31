
import React, { Component } from 'react'

 class HoverCounter extends Component {
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
                <h1 onMouseOver={this.incrementCount}>Clicked mouse  {this.state.count}times</h1>
                <h6 onMouseOver={this.incrementCount}>Clicked mouse {count} times</h6>
            </div>
        )
    }
}

export default HoverCounter
