
import React, { Component } from 'react'
import HoverCounter from '../26HigherOrderPart1/HoverCounter'
import UpdatedComponent from './withCounter'

 class HoverCounter1 extends Component {
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
                <h1 onMouseOver={this.incrementCount}>Clicked{this.props.name} mouse  {this.state.count}times</h1>
                <h6 onMouseOver={this.incrementCount}>Clicked mouse {count} times</h6>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter1)
