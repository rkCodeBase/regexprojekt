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
      <h1>Find potentielle CPR-numre</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)} // Update state on text change
        placeholder="Skriv her..."
        rows={6}
        cols={50}
        style={{
          color: 'black', // Change text color to black
          backgroundColor: 'white', // Optional: Ensure background is white
        }}
      ></textarea>
      <br />
      <button onClick={handleCheck} style={{ marginTop: '10px' }}>
        Klik her for at finde potentielle CPR-numre
      </button>
      <div style={{ marginTop: '20px' }}>
        <h3>Potentielle CPR-numre:</h3>
        {cprNumbers.length > 0 ? (
          <ul>
            {cprNumbers.map((cpr, index) => (
              <li key={index}>{cpr}</li>
            ))}
          </ul>
        ) : (
          <p>Ingen potentielle CPR-numre fundet.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
