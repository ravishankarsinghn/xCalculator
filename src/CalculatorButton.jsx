import "./calculatorButton.css";

function CalculatorButton({index,value,handleClick}) {

  return (<button key={index} onClick={()=>handleClick(value)} className="calculator_buttons">{value}</button>)

}

export default CalculatorButton;