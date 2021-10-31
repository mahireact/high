import React, { Component } from 'react'

import LifeCycle4 from './LifeCycle4'
 class LifeCycle3 extends Component {
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
  shouldComponentUpdate(){
      console.log("lifecycleA shouldcomponent update")
      return true
  }
  getSnapshotBeforeUpdate(){
      console.log("lifecycle A  getsnapshotBefore update")
      return null
  }
  componentDidUpdate(){
      console.log('lifecycle A componentDitUpdate')
  }
  changeState=()=>{
      this.setState(
          {
              name:"codeEvolution"
          }
      )
  }
    render() {
   console.log("liifecycleArender-3")
        return (
            <div>
                <div>lifecycleA3</div>
                <button onClick={this.changeState}>changeState</button>
                    <LifeCycle4/>
                
            </div>
        )
    }
}

export default LifeCycle3
//  order of executuion during mounting phase
// lifecycleA constructor-1
// LifeCycle1.js:13 lifecycleA getDerived state from props-2
// LifeCycle1.js:21 liifecycleArender-3
// LifeCycle1.js:18 lifecycleA componentdidMount-4