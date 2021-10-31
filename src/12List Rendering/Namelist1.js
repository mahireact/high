import React from 'react'

function Namelist1() {
          const names=["bruce", "Clark", "diana"]
    return (
        <div>
            {
                
        names.map(name=><h2>{name}</h2>)
    }
        </div>
         
    )
}

export default Namelist1
