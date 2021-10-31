index.js:1 Warning: Each child in a list should have a unique "key" prop.
  to avoid use key 


  llist without keys
  keys help react to identify which items in a list have changed or added or removed and placed a crucial role in handling ui updated efficienntly
  <ul>
  <li>Bruce</li>
  <li>clark</li>

  
  </ul>
  now i want to addd another item in list 
c

  how react updates 
  just iterates over both the list at the same time and generates a mutation whenever there  is a difference simply adds new item in dom tree

  
   <ul>
  <li>Bruce</li>
  <li>clark</li>


  
  </ul>

  now i add diana at top

  
   <ul>
     <li>Diana</li>
  <li>Bruce</li>
  <li>clark</li>


  
  </ul>
  now list inserted in the beginning of the llist in this situation when react iterates over both the lists and makes a comparison it finds out every item is different react will end up with mutating every child  instead of realizing it can keep the bruce and clark sub trees intact this in efficiency can be a problem and i order to solve this issue react supports the key attribute


  a key is a special string attribute you need to include when creating lists of elements
  keys give the elements a stable identity
  keys help react identify which items have changed, are added or are removed