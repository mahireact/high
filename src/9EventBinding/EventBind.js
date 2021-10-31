import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"hello"
         }
         this.clickHandler=this.clickHandler.bind(this)
     }
     
     clickHandler(){
         this.setState({
             message:"change"
         })
     }
    render() {
        return (
            <div>
                {this.state.message}
                <button  onClick={this.clickHandler.bind(this)}>EventBind</button>
                <button  onClick={()=>this.clickHandler()}>EventBindwitharrow</button>
                <button  onClick={this.clickHandler}>EventBindwithcostructor</button>

            </div>
        )
    }
}

export default EventBind
