import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = "Привет!";
    setTimeout(() => {
      document.title = "Я подсяду?";
    }, 1000);
  });

  return (
    <>
      <h2>Обновлений стейта: {counter}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Обновить стейт
      </button>
    </>
  );
}

export default App;
