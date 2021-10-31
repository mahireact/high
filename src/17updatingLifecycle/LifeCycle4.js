import React, { Component } from 'react'


 class LifeCycle4 extends Component {
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
  shouldComponentUpdate(){
    console.log("lifecycleB shouldcomponent update")
    return true
}
getSnapshotBeforeUpdate(){
    console.log("lifecycle B  getsnapshotBefore update")
    return null
}
componentDidUpdate(){
    console.log('lifecycle B componentDitUpdate')
}
    render() {
   console.log("liifecycleBrender-3")
        return (
            <div>
                <div>lifecycleB4</div>
             
            </div>
        )
    }
}


export default LifeCycle4