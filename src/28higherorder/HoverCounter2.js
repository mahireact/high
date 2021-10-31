
import React, { Component } from 'react'
import WithCounter from './withCounter'

 class HoverCounter2 extends Component {
    
    render() {
        const {count,incrementCount}=this.props
   
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Clicked mouse  {count}times</h1>
                <h6 onMouseOver={incrementCount}> {count} times</h6>
            </div>
        )
    }
}

export default WithCounter(HoverCounter2)
