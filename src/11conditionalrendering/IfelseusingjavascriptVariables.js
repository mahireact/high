import React, { Component } from 'react'

export class IfelseusingjavascriptVariables extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        let message
        if(this.state.isLoggedIn){
            message=<div>welcome vishwas</div>
        }
        else{
            message=<div>welcome guest</div>
        }
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default IfelseusingjavascriptVariables
