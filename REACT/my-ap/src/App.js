import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (items.length === 0) {
      document.title = `Добавьте первый товар`;
    } else if (items.length === 1) {
      document.title = `Добавлен один товар`;
    } else {
      document.title = `Добавлено ${items.length} товаров`;
    }
  });

  function handleButtonClick() {
    setItems([...items, { id: items.length }]);
  }

  return (
    <>
      <h2>Всего товаров: {items.length}</h2>
      <button onClick={handleButtonClick}>Добавить товар</button>
    </>
  );
}

export default App;
