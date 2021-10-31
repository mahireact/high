import React, { Component } from 'react'

export class TernaryOperator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        return (
           
                this.state.isLoggedIn ?
                <div>
                    welcome vishwas Ternary
            </div> :
            <div>welcome guest  Ternary</div>
        )
    }
}

export default TernaryOperator
