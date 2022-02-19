import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useBooksQuery } from './graphql/generated.ts';
import Books from './components/Books';

function App() {
  const [reloadData, setReloadData] = useState(false);
  //const [booksResult] = useBooksQuery()
  //const {books} = booksResult.data ? booksResult.data : []
  const reload = () => {
    //const [result] = useBooksQuery();
    setReloadData(!reloadData)
    console.log("result")
    // `result` is fully typed!
    // ...
  }  
 // console.log(books)
  //textInput.current.onMouseDown=Books
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type={"button"} value={`Reload: ${reloadData}`} onMouseDown={reload} />   
        <Books />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
