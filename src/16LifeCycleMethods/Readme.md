this methods are not used in functional componentss
this section focus on class components 
this methods for react 16 verssion
we can classify methos in four phases
mounting:1)when an instance of a component is being created and inseerted in dom
 4methods:
 connstructor
 static getDerivedStateFromProps
 render
 componentDidMount
updating:when a component is being re-rendered as a result of changes to either it props or state
methods:
 static getDerivedStateFromProps
 shouldComponentUpdate
 render
 getSnapshotBeforeUpdate
 componentDidUpdate
unmounting: when a component is beinng removed from the Dom
methods:
componentWillUnmount

errorHandling:when there is an error during rendering ina lifecycle method or in the constructor of any child component
methods:
static getDerivedStateFromError and componentDidCatch



next video
mounting lifecycle methods
mehtods which are called when an instance of a component is beinng created andinserted into dom
order:
constructor(props)
a special functiion that is called when ever a new componnent is created
what is constructor is used for
it is used for initilizing state
binding the event hndlers
never call http request in constructor methods
we have to call special function is super(props)
this call base class constructor
super(props)-directly overwrite this.state
constructor is also the only place where you are expected to change or set the state by direcctly overweritng this.state fields in all other scenarious you have to use this.setState
2-step:
@@@@@@@@@@@@@
static getDerivedStateFromProps(props,state)
this method is used when the state of the component depends on the changes in props over time
exx:initial state of component depends on the props being passed to the component in such a scenario you ca use this mehtood and it mehtod is static method this does not have access to the this keyword so we cannot cal this.setstate for this method instead we can use an object that represents the  new state of the object
do not use for fetching date or http requests
_______________
3 step:
render:
the render method is onlly required method in a class compoent
in render method we call this.props and this.state and return the jsx which describe ui
the render function is pure function
do not do changing the state with component or interacting with dom or making any Ajax
do not change state or interact with dom or make ajax calls

4 step:
____________
componentDidMount()
it is invoked immediately after a component and all its children components have been redered to the dom
this method is the perfecct place to cause side effects
to perform innitialization that requres dom nodes and also load data by making network


go to code
lifecycle1:
order of executionn code
lifecycleA constructor-1
LifeCycle1.js:13 lifecycleA getDerived state from props-2
LifeCycle1.js:21 liifecycleArender-3
LifeCycle1.js:18 lifecycleA componentdidMount-4
 now create child component
 lifecycle2:
 copy code from lifecycle1


 output:
 lifecycleA constructor-1
LifeCycle1.js:14 lifecycleA getDerived state from props-2
LifeCycle1.js:22 liifecycleArender-3
LifeCycle2.js:11 lifecycleB constructor-1
LifeCycle2.js:14 lifecycleB getDerived state from props-2
LifeCycle2.js:22 liifecycleBrender-3
LifeCycle2.js:19 lifecycleB componentdidMount-4
LifeCycle1.js:19 lifecycleA componentdidMount-4

unmounting phase method
componentWillUnmount()
method is invoked immediately before a component is unmounted and destroyed
cancelling any network requests,removing event habdlers, canceling any subscriptions an also invalidating timers
do not call the setState method
