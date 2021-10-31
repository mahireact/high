import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureCompfrmemo from './PureComponent'
import RegularComponentfrmemo from './RegularComponent'

export class ParentCompfrmemo extends Component {
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
                ParentComponentfrmemo
                {/* <RegularComponentfrmemo name={this.state.name}></RegularComponentfrmemo>
                <PureCompfrmemo name={this.state.name}></PureCompfrmemo> */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentCompfrmemo
