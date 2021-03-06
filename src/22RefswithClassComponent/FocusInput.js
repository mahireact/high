import React, { Component } from 'react'
import Input from './Input'
 class FocusInput extends Component {
     constructor(props) {
         super(props)
     
         this.componentRef = React.createRef()
     
     }
     clickHandler=()=>{

         this.componentRef.current.focusInput() // focus input() fromm input component
     }
    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={ this.clickHandler}>click</button>
            </div>
        )
    }
}

export default FocusInput
