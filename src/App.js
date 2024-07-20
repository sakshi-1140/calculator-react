import "./App.css";
import InputContainer from "./components/InputContainer";
import ButtonContainer from "./components/ButtonContainer";
import React, { useState } from 'react';
import ErrorComponent from "./components/ErrorComponent";//old
import OutputContainer from "./components/OutputContainer";//old
import Result from "./components/Result.jsx"
// delete comments with old
function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  ///const [output, setOutput] = useState(null);//old

  const [result,setResult]=useState(null);//new 
  const [error, setError]=useState("") ;//extra

  const handleNumber1Change = (e) => {
    console.log(e.target.value)
    setNumber1(e.target.value);
  };

  const handleNumber2Change = (e) => {
    console.log(e.target.value)
    setNumber2(e.target.value);
  };

  const validateInputs=()=>{
    if(number1===""||number2==="")
    {
      setError('Both fields are required.');//extra
      //setOutput("error");//old
      setNumber1("");
      setNumber2("");
      return false;
    }
      if(isNaN(number1)||isNaN(number2)){
      setError('Inputs must be valid numbers.');//extra
      //setOutput("error");//old
      setNumber1("");
      setNumber2("");
      return false;
    }
    return true;
  }
  const handleOperation =(operation)=>{
    if(validateInputs())// validation here
    {
      const num1=Number(number1);
      const num2=Number(number2);
      let res;
      if (operation === '+') {
        res = num1 + num2;
      } else if (operation === '-') {
        res = num1 - num2;
      } else if (operation === '*') {
        res = num1 * num2;
      } else if (operation === '/') {
        if (num2 === 0) {
          setError('Cannot divide by zero.');//extra
          return;
        }
        res = num1 / num2;
      }
      setResult(res);//new addition
      setError("");//extra
      //setOutput(res);//old add
      setNumber1("");
      setNumber2("");
    }
   
  };

  return (
    <div className="mainContainer">
      <h1>React Calculator</h1>
      <InputContainer
        number1={number1}
        number2={number2}
        handleNumber1Change={handleNumber1Change}
        handleNumber2Change={handleNumber2Change}
      />
      <ButtonContainer
      handleOperation={handleOperation} />
      {/* {output==="error"?<ErrorComponent error={error}/>:<OutputContainer output={output} />} */}
     <Result result={result} error={error}/>
    </div>
  );
}

export default App;
