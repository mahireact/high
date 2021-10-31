why event binding is required?

---

clickHandler(){
this.setState({
message:"change"
})
}
render() {
return (
<div>
{this.state.message}
<button  onClick={this.clickHandler}>EventBind</button>

                output cannot read property to because this keyword is undefined in eventHandler that is the reason event binding is necessary in class component

                we can over come this in number of ways
                1)Bind the keyword in the render()
                  this.clickHandler.bind(this)  now this keyword not undefined anymore

                2)arrow functions in render method
                onClick={()=>this.clickHandler()}
                not need of curly braces
                3)bind the event handler in the constructor
                  this.clickHandler=this.clickHandler.bind(this)
                  {this.clickHandler in return method
