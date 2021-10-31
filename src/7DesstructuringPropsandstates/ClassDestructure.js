import React, { Component } from 'react'
 class ClassDestructure extends Component {
     
    render() {
        const{name,color}=this.props
        return (
            <div>
                {name}and {color}
            </div>
        )
    }
}

export default ClassDestructure
