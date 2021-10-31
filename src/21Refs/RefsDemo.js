import React, { Component } from 'react'

 class RefsDemo extends Component {
     constructor(props) {
         super(props)
     
         this.inputRef= React.createRef()
              
         
     }
     componentDidMount(){
        
         console.log(this.inputRef);  // it shows output
         alert(this.inputRef.current.focus())
     }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }
}

export default RefsDemo

