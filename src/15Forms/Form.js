import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:"",
             comments:"",
             topic:"html"
        }
    }
    // defined method as class property
    handleUserNameChange =(event)=>{
    this.setState({
        userName:event.target.value
    })
    }
    handlecommentChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=event=>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic} `)
        event.preventDefault()
    }
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
                <div>
                <label>userName:</label>
                <input type="text"
                 value={this.state.userName} 
                 onChange={this.handleUserNameChange}></input>
            </div>
            <div>
                <label>comments</label>
                <textarea 
                value={this.state.comments} 
                onChange={this.handlecommentChange}></textarea>
            </div>
            <div>
                <label>
                    topic
                </label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="react">rct</option>
                    <option value="angular">angular</option>
                    <option value="html">Html</option>
                </select>
            </div>
            <button type="submit">submit</button>
          </form>
        )
    }
}

export default Form

