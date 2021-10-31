import React, { Component } from 'react'
import Twoclass from './Twoclass'

 class Oneclass extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"hey"
         }
         this.firstParent=this.firstParent.bind(this)
     }
     firstParent(passinputInparent){
         alert(`parent commponent ${this.state.message} and ${passinputInparent}`)
     }
     
    render() {
        return (
            <div>
                <Twoclass input={this.firstParent}></Twoclass>
            </div>
        )
    }
}

export default Oneclass
