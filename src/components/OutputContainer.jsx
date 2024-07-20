import React from 'react'

function OutputContainer({output}) {
  return (
    <div className="outputContainer">
        <h3 id="sc"> Success</h3>
        <h4>Result - {output}</h4>
    </div>
  )
}

export default OutputContainer