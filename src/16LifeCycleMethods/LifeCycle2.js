import React, { Component } from 'react'


 class LifeCycle2 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"vishwas"
         }
         console.log("lifecycleB constructor-1")
     }
     static getDerivedStateFromProps(sate,props){
         console.log("lifecycleB getDerived state from props-2")
         return null
     }

  componentDidMount(){
      console.log("lifecycleB componentdidMount-4")
  }
    render() {
   console.log("liifecycleBrender-3")
        return (
            <div>
                <div>lifecycleB</div>
             
            </div>
        )
    }
}


export default LifeCycle2