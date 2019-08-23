import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Hello from './components/hello.js';
import Fish from './components/fish.js';


function App() {

  const [data, setData] = useState([]);

  useEffect( () => {
    
    const getFish = async () => {
      const result = await axios(
        'https://data.michigan.gov/resource/he9h-7fpa.json',
      );
      console.log(result.data);
      setData(result.data);
    }

    getFish();



    
  }, []);

  return (
    <div className="App">
      <header className="header">

        <Hello />
      </header>
      <div>
        {data.map(item => (

<Fish key={item.id} name={item.commonname} latin={item.latinname} />

        ))}
      </div>
      <Fish />
    </div>
  );
}

export default App;
