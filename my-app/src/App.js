import * as React from 'react';
import logo from './logo.svg';
import SearchBox from './SearchBox';
import './App.css';
import { useState } from 'react'
import GenomicsTable from './GenomicsTable';


function App() {
  const [data, setData] = useState(0);
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);

  function returnCols(geneticCode) {
    const firstRow = geneticCode.data[0].homologies[0].source
    const columns = [];
    const rows = [];

    for (let col_name in firstRow) {
      console.log('col', col_name)
      columns.push(col_name)
    }
 
    rows.push(firstRow)
    
    console.log("columns are", columns)
    console.log("rows are", rows)
    setRows(rows);
    setCols(columns);
  }

  async function logData() {
    console.log('Fetching data...')
    const response = await fetch("https://rest.ensembl.org/homology/symbol/human/BRCA1?content-type=application/json");
    //console.log(response)

    const genomics = await response.json();
    //console.log(genomics);
    setData(genomics)
    
    returnCols(genomics)
    }


  return (
    <div className="App">
      <header className="App-header">

        <strong className ="App-title">
          Genetic codes
        </strong>

        <SearchBox> </SearchBox>
        <GenomicsTable rows={rows} cols={cols}/>
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