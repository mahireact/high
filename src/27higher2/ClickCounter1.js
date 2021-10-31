
import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
 class ClickCounter1 extends Component {
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
                <button onClick={this.incrementCount}>Clicked {this.props.name}{count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter1)
