
import React, { Component } from 'react'
import WithCounter from './withCounter' 
 class ClickCounter3 extends Component {

    render() {
   
        const {count,incrementCount}=this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {this.props.name} {count}times</button>
                <button onClick={incrementCount}>Clicked {this.props.name}{count} times</button>
            </div>

        )
    }
}

export default WithCounter(ClickCounter3)
