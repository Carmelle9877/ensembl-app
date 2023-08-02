import * as React from 'react';
import logo from './logo.svg';
import SearchBox from './SearchBox';
import './App.css';
import { useState } from 'react'


function App() {
  const [data, setData] = useState(0);
  const [columns, setColumns] = useState([]);

  const cols = ['Protein no.', 'Species', 'Gene size'];

  console.log('data', data)

  function returnCols(geneticCode) {
    console.log('Genetic code', geneticCode)
    const colsOfInterest = ['source.protein_id', 'source.species', 'taxonomy_level', 'type'];
    columns = []
    for (let i in colsOfInterest) {
      console.log(i)
    }

  }

  async function logData() {
    console.log('Fetching data...')
    const response = await fetch("https://rest.ensembl.org/homology/symbol/human/BRCA1?content-type=application/json");
    console.log(response)

    const genomics = await response.json();
    console.log(genomics);
    setData(genomics)
    console.log(data.data[0].homologies[0])
    returnCols(data.data[0].homologies[0])
    }

    console.log('new Data', data)


  return (
    <div className="App">
      <header className="App-header">

        <strong className ="App-title">
          Genetic codes
        </strong>

        <SearchBox></SearchBox>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={logData}
        >
          FETCH DATA!
        </button>
        
        {cols.map((item) => {
          return (
            <p>Here is {item}</p>
          )
        })}
       
      </header>
    </div>
  );
}

export default App;