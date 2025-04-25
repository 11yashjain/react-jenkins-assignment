import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operation) {
      case '+':
        setResult(a + b);
        break;
      case '-':
        setResult(a - b);
        break;
      case '*':
        setResult(a * b);
        break;
      case '/':
        setResult(b !== 0 ? a / b : 'Cannot divide by zero');
        break;
      default:
        setResult('Invalid operation');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Simple Calculator</h2>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
        <div>
          <button onClick={() => calculate('+')}>+</button>
          <button onClick={() => calculate('-')}>-</button>
          <button onClick={() => calculate('*')}>*</button>
          <button onClick={() => calculate('/')}>/</button>
        </div>
        {result !== null && (
          <p style={{ marginTop: '1rem' }}>Result: {result}</p>
        )}
      </header>
    </div>
  );
}

export default App;
