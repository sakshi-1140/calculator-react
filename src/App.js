import "./App.css";
import InputContainer from "./components/InputContainer";
import ButtonContainer from "./components/ButtonContainer";
import React, { useState } from 'react';
import ErrorComponent from "./components/ErrorComponent";//old
import OutputContainer from "./components/OutputContainer";//old
import Result from "./components/Result.jsx"
// delete lines with comments = old
function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  ///const [output, setOutput] = useState(null);//old

  const [result,setResult]=useState(null);
  const [error, setError]=useState("") ;

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
      setError('Both fields are required.');
      //setOutput("error");//old
      setNumber1("");
      setNumber2("");
      return false;
    }
      if(isNaN(number1)||isNaN(number2)){
      setError('Inputs must be valid numbers.');
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
          setError('Cannot divide by zero.');
          return;
        }
        res = num1 / num2;
      }
      setResult(res);
      setError("");
      //setOutput(res);//old 
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
