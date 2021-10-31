import React from 'react'

function NameforAntipattern() {
    const names=["pattern10","pattern20","pattern30","pattern10"]
    const nameList=names.map((name,index)=> <h2 key={index}>{index}{name} </h2>)
    
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameforAntipattern
