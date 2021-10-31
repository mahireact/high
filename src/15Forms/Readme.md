controlled componentss
for input:
this.state={
    email:""
}
this.changeEmailHandler=(eveent)=>{
    this.setState({email:event.target.value})
}

<input type="text" value ={this.state.email} onChange={this.changeEmailHandler}/>

for controlled components

create ciomponent state
handling onchange event
in this we pass

handleUserNameChange =(event)=>{
    this.setState({
        userName:event.target.value
    })

    event.target.value in userName is used to change it to updated value

    Text:
    addding html
    create state as comments 
    create handle
    same for topic
    submmit:
    for submitting go to form tag and assign handler as Onsubmit


now whatever i enter in form it will get submitted
though if iam nnot going to fill anything into the form i just click on submit it get submitted to avvoid this i need to preventDefault()
