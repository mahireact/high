
import React, { Component } from 'react'
import WithCounter from './withCounter' 
 class ClickCounter2 extends Component {

    render() {
   
        const {count,incrementCount}=this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked  {count}times</button>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>

        )
    }
}

export default WithCounter(ClickCounter2)
