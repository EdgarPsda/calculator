import logo from "./logo.svg";
import "./App.css";
import freecodecampLogo from "./images/freecodecamp-logo.png";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("Hola");

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please enter values to evaluate.");
    }
  };

  const agregarInput = (val) => {
    setInput(input + val);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodecampLogo}
          alt="Logo de freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Screen screen={input} />
        <div className="fila">
          <Button manejarClick={agregarInput}>1</Button>
          <Button manejarClick={agregarInput}>2</Button>
          <Button manejarClick={agregarInput}>3</Button>
          <Button manejarClick={agregarInput}>+</Button>
        </div>
        <div className="fila">
          <Button manejarClick={agregarInput}>4</Button>
          <Button manejarClick={agregarInput}>5</Button>
          <Button manejarClick={agregarInput}>6</Button>
          <Button manejarClick={agregarInput}>-</Button>
        </div>
        <div className="fila">
          <Button manejarClick={agregarInput}>7</Button>
          <Button manejarClick={agregarInput}>8</Button>
          <Button manejarClick={agregarInput}>9</Button>
          <Button manejarClick={agregarInput}>*</Button>
        </div>
        <div className="fila">
          <Button manejarClick={calcularResultado}>=</Button>
          <Button manejarClick={agregarInput}>0</Button>
          <Button manejarClick={agregarInput}>.</Button>
          <Button manejarClick={agregarInput}>/</Button>
        </div>
        <div className="fila">
          <ClearButton manejarClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
