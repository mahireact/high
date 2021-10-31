import React, { Component } from 'react'

 class ClassState extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"hello please pass this message"
         }
     }
     
    render() {
        return (
            <div>
                 hello  {this.state.message}
            </div>
        )
    }
}

export default ClassState
