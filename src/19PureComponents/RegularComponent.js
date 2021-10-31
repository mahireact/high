import React, { Component, PureComponent } from 'react'

 class RegularComponent extends PureComponent {
    render() {
        console.log("regular component")
        return (
            <div>
                RegularComponent
            </div>
        )
    }
}

export default RegularComponent
