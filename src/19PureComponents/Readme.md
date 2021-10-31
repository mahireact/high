second way of creating class component
pure component
rpcv-snippet

first
purecomponent
regularcoomponent
parent

in console
regular component
ParentComp.js:21 ***from parent compoent***

output:
***from parent compoent***
RegularComponent.js:5 regular component
PureComponent.js:5 pure---------component

ParentComp.js:21 ***from parent compoent***
RegularComponent.js:5 regular component
ParentComp.js:21 ***from parent compoent***
RegularComponent.js:5 regular component

explanation:
pure components rendered only once
no need to re render when it is not done any modifications


difference between regular componennt  and pure component
regulaar component:
a regular component does not implement the shouldComponentUpdate method.it always returns true by default
pure component:
a pure component on the other hand implements shouldComponentUpdate with a shallow props and state comparison


shallow comparison:
primitive types:
a shallow comparison b returns true if a and b have the same value and are of the same type
ex: string "vishwas" shallow comparison string "vishwwas" returns true
complex types:
a shallow comparison b returns true i a and b reference the exact same object
var a=[1,2,3];
var b=[1,2,3];
var c = a;
var d=(a==b); false
var e=(a == c); true


var a={x:1, Y:2};
var b={X:1, Y:2};
var c=a;
var ab_eq=(a ===b); // false
var aceq=(a ===c);  // true

pure components
a pure componentss impleemntss should componentUpdate with a shallow prop and state comparing 

shallow comparison  of prevState with currentState
shallow comparison of prevProps with currentProps

change pure component
extends component to purecomponent

 class RegularComponent extends PureComponent
 output
 ***from parent compoent***
RegularComponent.js:5 regular component
PureComponent.js:5 pure---------component
176 times 5ParentComp.js:21 ***from parent compoent***





a="10"
b=10;
a==b
true