import React, { Component } from 'react'
import PureComp from './PureComponent'
import RegularComponent from './RegularComponent'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"vishwas"
        }
    }
    componentDidMount(){
        setInterval(()=>{
this.setState({
    name:"vishwas"
})
        },2000)
    }
    render() {
        console.log("***from parent compoent***")
        return (
            <div>
                ParentComponent
                <RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
