import React from 'react'

function InputContainer({ number1, number2, handleNumber1Change, handleNumber2Change }) {
  return (
    <div className='inputContainer'>
    <input
      type="text"
      value={number1}
      onChange={handleNumber1Change}
      placeholder="Num - 1"
    />
    <input
      type="text"
      value={number2}
      onChange={handleNumber2Change}
      placeholder="Num - 2"
    />
  </div>
  )
}

export default InputContainer