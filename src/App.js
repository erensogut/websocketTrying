import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';


function App() {
  const connection = new WebSocket('wss://fstream.binance.com/ws/btcusdt@bookTicker');
  const [curr, setCurr] = useState();
  //const array = useRef([]);
  const array = [];
  useEffect(() => {
    //var connection = new WebSocket('wss://fstream.binance.com/ws/btcusdt@bookTicker');
    // listen to onmessage event
    connection.onmessage = evt => {
      // add the new message to state

      //messages: this.state.messages.concat([evt.data])

      var parsedJSON = JSON.parse(evt.data);
      //array.push(parsedJSON.a);
      //console.log(array);
      //localStorage.setItem('ereb', '"');
      //localStorage.setItem('myValueInLocalStorage', array);
      setCurr(parsedJSON.a);
    }
  }, curr); // See Note 2

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Now, the most current Bitcoin Usd coin is
        </p>
        <p>{curr}</p>

      </header>
    </div>
  );
}

export default App;
