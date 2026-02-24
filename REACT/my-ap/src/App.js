import React, { useState, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import mapboxgl from "mapbox-gl";
import "./styles.css";

/*
========================================
ПАРАГРАФ 1 — JSX, АТРИБУТЫ И PROPS
========================================
*/

// =========================
// 1. Компонент с props
// =========================
function Greeting(props) {
  return (
    <div className="example-block">
      <h4>Компонент Greeting</h4>

      {/* JSX-выражения через {} */}
      <p>
        Привет, <strong>{props.name}</strong>!
      </p>

      <p>Возраст: {props.age}</p>

      {/* Атрибуты пишутся camelCase */}
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
    <div className="container">
      <h1>📘 React Конспект</h1>

      {/* ===== ПАРАГРАФ 1 ===== */}
      <section className="paragraph">
        <h2>Параграф 1: JSX, атрибуты и props</h2>

        <p>В этом параграфе мы изучаем:</p>

        <ul>
          <li>JSX</li>
          <li>Выражения внутри {"{}"}</li>
          <li>Атрибуты (className, onClick)</li>
          <li>Передачу props</li>
        </ul>

        <Greeting name="Алексей" age={25} />
        <Greeting name="Мария" age={30} />
      </section>
    </div>
  );
}

// Рендер
createRoot(document.querySelector("#root")).render(<App />);
