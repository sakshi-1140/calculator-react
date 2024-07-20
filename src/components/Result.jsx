import React from 'react'
import ErrorComponent from './ErrorComponent'
import OutputContainer from './OutputContainer'
function Result({ result, error }) {
 if(error){
       return <ErrorComponent error={error} />
    }
   if(result!=null){
    return <OutputContainer output={result} />
   }
   return null;

}

export default Result