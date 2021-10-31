5 methods:
for updating lifecycle
static getDerivedStateFromProps(props,state)
method is caalled every time a compoent is re-rendered
set the state 
do not cuase side effets 
this method is rarely used methods

shouldComponentUpdate(nextProps,nextState)
if at all the component should rerender or not by deault all class componnents wil rerener wheneven the props they recieve or theor state chanages this methood caan prevent that ddefault behvaiour by returning false
in this method is copare the existing props and state values with the nextprops and state values and reuturn or alse or true 
it is for performance optimizations

render:
getSnapshotBeforeUpdate(prevProps,prevState)
called right before the changes from the virtualDom are to be reflected in the Dom
rarely used method
 this method either return null or return a value returned value will be passed as the third parameter to the next method

 componentDidUpdate(prevProps,prevState,snapshot
 called after the render is finished in the re-render cycles)

 from code:
 output:
 lifecycleA constructor-1
LifeCycle3.js:14 lifecycleA getDerived state from props-2
LifeCycle3.js:40 liifecycleArender-3
LifeCycle4.js:11 lifecycleB constructor-1
LifeCycle4.js:14 lifecycleB getDerived state from props-2
LifeCycle4.js:33 liifecycleBrender-3
LifeCycle4.js:19 lifecycleB componentdidMount-4
LifeCycle3.js:19 lifecycleA componentdidMount-4
_________________________

after clicking button
_________________________
lifecycleA getDerived state from props-2
LifeCycle3.js:22 lifecycleA shouldcomponent update
LifeCycle3.js:40 liifecycleArender-3
LifeCycle4.js:14 lifecycleB getDerived state from props-2
LifeCycle4.js:22 lifecycleB shouldcomponent update
LifeCycle4.js:33 liifecycleBrender-3
LifeCycle4.js:26 lifecycle B  getsnapshotBefore update
LifeCycle3.js:26 lifecycle A  getsnapshotBefore update
LifeCycle4.js:30 lifecycle B componentDitUpdate
LifeCycle3.js:30 lifecycle A componentDitUpdate
