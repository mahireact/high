index.js:1 Warning: Encountered two children with the same key, `pattern10`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

for if we use are nnot going to use unique
for this reason use index

 const nameList=names.map((name,index)=> <h2 key={index}>{index}{name} </h2>) 


 cons of using index
 