import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        const axios = require('axios');
var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=br&' +
           'category=health&'+
           'q=corona&'+
          'apiKey=748e2f82b67543c4b0d9a7c84a9e7db8';
axios.get(url)
    .then( response => {
        console.log(response.data)
    })
        </p>
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
