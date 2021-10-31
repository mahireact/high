import React, { Component } from 'react'

 class Input extends Component {
     constructor(props) {
         super(props)
     
         this.firstInput = React.createRef()
     }
     focusInput(){
         this.firstInput.current.focus()
     }
     
    render() {
        return (
            <div>
                <input type="text" ref={this.firstInput}></input>
            </div>
        )
    }
}

export default Input
