import React from 'react'

function ErrorComponent({error}) {
  return (
    <div className='errorComponent'>
        <h3>Error!</h3>
        <h4>{error}</h4>
    </div>
  )
}

export default ErrorComponent