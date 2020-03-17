import React,{useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const axios = require('axios');

function App() {
  const url = 'http://newsapi.org/v2/top-headlines?' +
          'country=br&' +
           'category=health&'+
           'q=corona&'+
          'apiKey=748e2f82b67543c4b0d9a7c84a9e7db8';
  useEffect( async ()=>{
   const response = await  axios.get(url)

   console.log(response)
    
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      


        </p>
       
      </header>
    </div>
  );
}

export default App;
