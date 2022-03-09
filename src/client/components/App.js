import React, {useState} from 'react';

import { calculator } from '../utils/calculator.mjs'

import '../styles/App.css';

export const App = () => {
  const [calculation, setCalculation] = useState("")
  const [answer, setAnswer] = useState("");

  const handleChange = (event) => {
    setAnswer("");
    setCalculation(event.target.value);
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    const answer = calculator(calculation);
    setAnswer(answer)
  }

  return (
    <div className="App">     
      <h2>Calculator</h2> 
      <form onSubmit={handleSubmit}>
        <label id="calc" htmlFor="calc">Calculation: </label>
        <input
          type="text"
          id="calc"
          name="calc"
          onChange={handleChange}
          value={calculation}
        />
        &nbsp;
        <button type="submit">Calculate</button>
      </form>
      <p>Answer: {answer}</p>      
    </div>
  );
}