import React, { Component } from 'react'

 class ClassStateNeverModifyDirectlyInsteadUseState extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"hi how are you "
              
         }
     }
     changeText(){
     this.setState({
         message:"hello iam chaged"
     })
    }
 
    render() {
        return (
            <div>
                 {this.state.message}
              <button onClick={()=>this.changeText()}> click</button> 
                
             
            </div>
        )
    }
}

export default ClassStateNeverModifyDirectlyInsteadUseState
