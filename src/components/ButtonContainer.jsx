import React from 'react'

function ButtonContainer({handleOperation}) {
    const arr=["+","-","*","/"]
  return (
    <div className="buttonContainer">
        {
            arr.map(item=>{
                return <button key={item} onClick={()=>handleOperation(item)}>{item}</button>
            })
        }
        {/* <button onClick={()=>handleOperation('+')}>+</button>
        <button onClick={()=>handleOperation('-')}>-</button>
        <button onClick={()=>handleOperation('*')}>*</button>
        <button onClick={()=>handleOperation('/')}>/</button> */}
    </div>
  )
}

export default ButtonContainer