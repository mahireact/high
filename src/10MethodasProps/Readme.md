parebt componnent can pass down props to its children componentsin the data parent component when passed as props is available in children component
this time we pass in  reference to a method as props to the children component



create a file as parent

greetParent(passoarneters what we passed in chid){
    alert(`` ${passoarneters what we passed in child})
}

creat a file as child
parent:
import in parent compoonent

<child  giveayName={this.greetParent}></child>

child:
props.giveayName in child eventhandler
if we wantto pass any parameter
change ()=>{props.giveayName(passoaraneters)}