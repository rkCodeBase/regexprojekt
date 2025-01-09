'use client';

import { useState } from 'react';
import { findCprNumbers } from '@/textUtils'; // Assuming findCprNumbers is correctly exported and imported

const HomePage = () => {
  const [text, setText] = useState(''); // State for user input
  const [cprNumbers, setCprNumbers] = useState<string[]>([]); // State for detected CPR numbers

  const handleCheck = () => {
    const foundCprNumbers = findCprNumbers(text); // Pass text to the function
    setCprNumbers(foundCprNumbers); // Update the state with found CPR numbers
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Find CPR Numbers</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)} // Update state on text change
        placeholder="Enter text here"
        rows={6}
        cols={50}
        style={{
          color: 'black', // Change text color to black
          backgroundColor: 'white', // Optional: Ensure background is white
        }}
      ></textarea>
      <br />
      <button onClick={handleCheck} style={{ marginTop: '10px' }}>
        Find CPR Numbers
      </button>
      <div style={{ marginTop: '20px' }}>
        <h3>Found CPR Numbers:</h3>
        {cprNumbers.length > 0 ? (
          <ul>
            {cprNumbers.map((cpr, index) => (
              <li key={index}>{cpr}</li>
            ))}
          </ul>
        ) : (
          <p>No CPR numbers found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
