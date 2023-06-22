import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

const App = () => {
  const [nums, setNums] = useState('');
  const [result, setResult] = useState(null);
  const handleInputChange = (event) => {
    setNums(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send the array of numbers to the server for processing
      const response = await axios.post('http://localhost:8081/api/calculate', { nums });

      // Update the result state with the calculated minimum absolute difference
      console.log(response.data.minDiff)
      setResult(response.data.minDiff);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="viewBar ">
      <h1>Minimum Absolute Difference Calculator</h1>
      <div className='InputLabel'> Enter an array of numbers (Comma-separated):</div>
      <form className="inputGroup madcform" onSubmit={handleSubmit}>
        <input className="input" type="text" value={nums} onChange={handleInputChange} />
        <button className="btn" type="submit">Calculate</button>
      </form>
      {result !== null && (
        <div >
          <h2 className='result'>Result:</h2>
          <p className='result1'>Minimum Absolute Difference: <span className='resvalue'>{result}</span></p>

          <p className='savetext'> <i class="fa fa-check-circle"></i>   The result has been saved successfully! </p>
        </div>
      )}
    </div>
  );
};

export default App;
