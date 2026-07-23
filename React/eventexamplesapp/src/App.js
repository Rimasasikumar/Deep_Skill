import React, { useState } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello! Have a nice day.");
  }

  function incrementAndHello() {
    increment();
    sayHello();
  }

  function sayWelcome(message) {
    alert(message);
  }

  function onPress() {
    alert("I was clicked");
  }

  return (
    <div className="App">

      <h1>React Event Examples</h1>

      <h2>Counter : {count}</h2>

      <button onClick={incrementAndHello}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={onPress}>
        OnPress
      </button>

      <hr />

      <CurrencyConvertor />

    </div>
  );
}

export default App;