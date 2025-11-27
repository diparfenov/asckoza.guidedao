import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

function App() {
  const [fast, setFast] = useState(18);
  useEffect(() => {
    document.title = `Фастинг: ${fast} часов`;
  });

  function handleMoreClick() {
    if (fast < 23) {
      setFast((prev) => prev + 1);
    }
  }

  function handleLessClick() {
    if (fast > 16) {
      setFast((prev) => prev - 1);
    }
  }

  return (
    <>
      <h2>
        Схема фастинга: {fast} / {24 - fast}
      </h2>
      <button onClick={handleMoreClick}>+</button>
      <button onClick={handleLessClick}>-</button>
    </>
  );
}

export default App;
