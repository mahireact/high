import React, { Component } from 'react'

 class Twoclass extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.input("childparameterinpaarentfunction")}>two</button>
            </div>
        )
    }
}

export default Twoclass
