import * as React from 'react';
import logo from './logo.svg';
import SearchBox from './SearchBox';
import './App.css';

async function logData() {
  console.log('Fetching data...')
  const response = await fetch("https://rest.ensembl.org/homology/symbol/human/OTX2?content-type=application/json");
  console.log(response)
  const genomics = await response.json();
  console.log(genomics);
}


function App() {
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
          FETCH DATA!</button>
      </header>
    </div>
  );
}

export default App;