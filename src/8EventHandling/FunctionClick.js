import React from 'react'

function FunctionClick() {
function clickHandler(){
    alert("hello");
}
    return (
        <div>
            <button onClick={clickHandler}>CLIck</button>
        </div>
    )
}

export default FunctionClick
