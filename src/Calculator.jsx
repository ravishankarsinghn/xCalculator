import { useState } from 'react';
import './calculator.css';
import CalculatorButton from './CalculatorButton';

const calculatorButtons = [
  '7', '8', '9', '+',
  '4', '5', '6', '-',
  '1', '2', '3', '*',
  'C', '0', '=',
  '/'
];
function Calculator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleClick = (value)=>{
    if(value === "C") {
      setInput("");
      setOutput("");
    } else if (value === "=") {
      calculate();
    } else {
      setInput(prev=>prev + value);
    }
  }

  const calculate = ()=>{
    if (!input.trim()) {
      setOutput('Error');
      return;
  }

    try {
      // Evaluating expression
      let output = eval(input);

      if(output === Infinity) {
        setOutput("Infinity");
      } else if (isNaN(output)) {
        setOutput("NaN");
      } else {
        setOutput(output);
      }

    }catch(error) {
      setOutput("Error");
    }
  }

  return (
    <div className='calculator'>
      <h1>React Calculator</h1>
      <input type='text' value={input} readOnly/>
      <div className='result'>{output}</div>
      <div className='buttons'>
        {calculatorButtons.map((value, index)=><CalculatorButton index={index} value={value} key={index} handleClick={handleClick}/>)}
      </div>
      
    </div>
  )
}

export default Calculator;
