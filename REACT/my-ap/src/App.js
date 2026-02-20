import React, { useState, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import mapboxgl from "mapbox-gl";
import "./styles.css";

// index.js
import { createRoot } from "react-dom/client";

// =========================
// Компонент с пропсами и атрибутами
// =========================
function Greeting(props) {
  // props — это объект, содержащий все переданные значения атрибутов
  return (
    <div className="example">
      {/* Используем JSX-выражение внутри {} */}
      <h2>Hello, {props.name}!</h2>
      <p>Ваш возраст: {props.age}</p>
      {/* Можно использовать стандартные HTML-атрибуты */}
      <button onClick={() => alert(`Привет, ${props.name}!`)}>
        Нажми меня
      </button>
    </div>
  );
}

// =========================
// Основной компонент App
// =========================
function App() {
  return (
    <div>
      <h1>123</h1>

      {/* Пример использования компонента с пропсами */}
      <Greeting name="Алексей" age={25} />
      <Greeting name="Мария" age={30} />
    </div>
  );
}

// Рендерим компонент в #root
createRoot(document.querySelector("#root")).render(<App />);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
