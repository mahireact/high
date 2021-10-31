import React from 'react'

function NameList2() {
    const names=["Bruce1","Clark","Diana"]
    const namelist=names.map(name=><h2>{name}</h2>)
    return (
        <div>
            {namelist}
            console.log(namelist);
        </div>
    )
}

export default NameList2


// index.js:1 Warning: Each child in a list should have a unique "key" prop.
