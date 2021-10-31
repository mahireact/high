import React from 'react'

function FunctionDestructurePropsSecondWay(props) {
    const{firstName,secondName}=props
    return (
        <div>
          firstName  {firstName} and secondName{secondName}
        </div>
    )
}

export default FunctionDestructurePropsSecondWay
