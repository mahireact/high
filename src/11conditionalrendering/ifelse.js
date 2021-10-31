import React, { Component } from 'react'

 class IFelse extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:false
         }
     }
     
    render() {
        if(this.state.isLoggedIn){
            return(
                <div>welcome wishwas</div>
            )
        }
        else{
            return <div>welcome guest</div>
        }
//         return (
//             <div>
//                <div>welcome vishwas</div>
//   <div>welcome guest</div>
//             </div>
//         )
    }
}

export default IFelse
