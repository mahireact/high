import React, { PureComponent } from 'react'

 class PureCompfrmemo extends PureComponent {
    render() {
        console.log("pure---------component")
        return (
            <div>
                PureComponentfrmemo {this.props.name}
            </div>
        )
    }
}

export default PureCompfrmemo

