import React, { Component } from 'react'

export class ShortCircui extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
       return this.state.isLoggedIn && <div>welcome vishwas from shortcircuit</div>
        
    }
}

export default ShortCircui
