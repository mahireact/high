import React, { Component } from 'react'
import LifeCycle2 from './LifeCycle2'

 class LifeCycle1 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"vishwas"
         }
         console.log("lifecycleA constructor-1")
     }
     static getDerivedStateFromProps(sate,props){
         console.log("lifecycleA getDerived state from props-2")
         return null
     }

  componentDidMount(){
      console.log("lifecycleA componentdidMount-4")
  }
    render() {
   console.log("liifecycleArender-3")
        return (
            <div>
                <div>lifecycleA</div>
                
                    <LifeCycle2/>
                
            </div>
        )
    }
}

export default LifeCycle1
//  order of executuion during mounting phase
// lifecycleA constructor-1
// LifeCycle1.js:13 lifecycleA getDerived state from props-2
// LifeCycle1.js:21 liifecycleArender-3
// LifeCycle1.js:18 lifecycleA componentdidMount-4