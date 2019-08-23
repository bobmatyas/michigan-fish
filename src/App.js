import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Fish from './components/fish.js';
import FishHeader from './components/header.js';

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


  const sortA2Z = () => {
    let sortedData = [...data];

    sortedData.sort(function(a, b) {
      var nameA = a.commonname.toUpperCase(); // ignore upper and lowercase
      var nameB = b.commonname.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    return 0;
    });
    setData(sortedData);
  }

  const sortZ2A = () => {
    let sortedData = [...data];

    sortedData.sort(function(a, b) {
      var nameA = a.commonname.toUpperCase(); // ignore upper and lowercase
      var nameB = b.commonname.toUpperCase(); // ignore upper and lowercase
      if (nameB < nameA) {
        return -1;
      }
      if (nameB > nameA) {
        return 1;
      }
    return 0;
    });
    setData(sortedData);
  }

  return (
    <div className="holder">
      <FishHeader />
      <main>
        <div>
          <select>
            <option></option>
            <option onClick={()=> sortA2Z()}>A-Z</option>
            <option onClick={()=> sortZ2A()}>Z-A</option>
          </select>
        </div>
        <div>
        {data.map(item => (
          <Fish 
            key={item.id} 
            name={item.commonname} 
            latin={item.latinname} 
            description={item.narrative}
            image={item.imageurl} 
          />
        ))}
        </div>
      </main>
    </div>
  );
}

export default App;
