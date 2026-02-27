import React, { useState, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// index.js
import { createRoot } from "react-dom/client";
import {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
  memo,
} from "react";
import "./styles.css";
/*
==================================================
📘 REACT КОНСПЕКТ
==================================================
*/
//для обертки каждого парагарфа
function Paragraph({ title, children }) {
  return (
    <section className="paragraph">
      <details className="accordion">
        <summary className="accordion-summary">
          <span className="arrow">▶</span>
          <span>{title}</span>
        </summary>
        <div className="accordion-content">{children}</div>
      </details>
    </section>
  );
}

/*
==================================================
ПАРАГРАФ 1 — JSX, АТРИБУТЫ И PROPS
==================================================
*/

function Greeting(props) {
  return (
    <div className="example-block">
      <h4>Greeting (обычный props)</h4>
      <p>
        Привет, <strong>{props.name}</strong>!
      </p>
      <p>Возраст: {props.age}</p>
      <button onClick={() => alert(`Привет, ${props.name}!`)}>
        Нажми меня
      </button>
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 2 — ДЕСТРУКТУРИЗАЦИЯ PROPS
==================================================
*/

function GreetingDestructured({ name, age }) {
  return (
    <div className="example-block">
      <h4>Greeting (деструктуризация)</h4>
      <p>
        Привет, <strong>{name}</strong>!
      </p>
      <p>Возраст: {age}</p>
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 3 — ПРОСТОЙ PROPS-БЛОК
==================================================
*/

function SimplePropsExample({ text, color }) {
  return (
    <div
      className="example-block"
      style={{
        border: `2px solid ${color}`,
        padding: "8px",
        marginBottom: "8px",
      }}
    >
      <p>{text}</p>
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 4 — СПРЕД-АТРИБУТЫ
==================================================
*/

function ButtonSpread(props) {
  return <button {...props}>{props.children}</button>;
}

function SpreadExample() {
  // Вариант 1 — через объект
  const button1Props = {
    onClick: () => alert("Нажали кнопку!"),
    children: "Кнопка 1",
    style: {
      backgroundColor: "lightgreen",
      padding: "8px 12px",
      marginRight: "8px",
    },
  };

  return (
    <div className="example-block">
      <h4>Пример использования спред-атрибутов</h4>

      <p>Вариант 1 — передаем props через объект:</p>
      <ButtonSpread {...button1Props} />

      <p>Вариант 2 — передаем props прямо вручную:</p>
      <ButtonSpread
        onClick={() => alert("Ошибка!")}
        children="Кнопка 2"
        style={{ backgroundColor: "tomato", padding: "8px 12px" }}
      />
    </div>
  );
}
/*
==================================================
ПАРАГРАФ 5 — ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ И ИЗ ФУНКЦИЙ
==================================================
*/

function ArrayDestructExample() {
  // Деструктуризация массива
  const numbers = [10, 20, 30];
  const [first, second, third] = numbers;

  return (
    <div className="example-block">
      <h4>Деструктуризация массива</h4>
      <p>Массив: [10, 20, 30]</p>
      <p>
        first = {first}, second = {second}, third = {third}
      </p>
    </div>
  );
}

// Деструктуризация из функции
function getUser() {
  return {
    name: "Алексей",
    age: 25,
    city: "Москва",
  };
}

function FunctionDestructExample() {
  // Деструктуризация объекта из функции
  const { name, age, city } = getUser();

  return (
    <div className="example-block">
      <h4>Деструктуризация объекта из функции</h4>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <p>Город: {city}</p>
    </div>
  );
}

function ArrayAndFunctionDestruct() {
  return (
    <div className="example-block">
      <ArrayDestructExample />
      <FunctionDestructExample />
    </div>
  );
}
/*
==================================================
ПАРАГРАФ 6 — useState, ЗАМЫКАНИЯ И УСЛОВНЫЙ РЕНДЕР
==================================================
*/

function UseStateExample() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Замыкание (зависит от count)
  function handleDecrease() {
    if (count === 0) return; // защита
    setCount(count - 1);
  }

  // Безопасное обновление
  function handleIncreaseSafe() {
    setCount((prev) => prev + 1);
  }

  function toggleVisibility() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div className="example-block">
      <h4>useState + условный рендер + disabled</h4>

      <p>Текущее значение count: {count}</p>

      <button onClick={handleIncreaseSafe} style={{ marginRight: "8px" }}>
        Увеличить
      </button>

      <button
        onClick={handleDecrease}
        disabled={count === 0}
        style={{
          marginRight: "8px",
          opacity: count === 0 ? 0.5 : 1,
          cursor: count === 0 ? "not-allowed" : "pointer",
        }}
      >
        Уменьшить
      </button>

      <button onClick={toggleVisibility}>Показать / Скрыть сообщение</button>

      <hr />

      {isVisible && (
        <p style={{ color: "green" }}>🎉 Сообщение отображается условно!</p>
      )}

      <p>Состояние видимости: {isVisible ? "Видимо" : "Скрыто"}</p>
    </div>
  );
}
/*
==================================================
ПАРАГРАФ 7 — ИММУТАБЕЛЬНЫЙ STATE И МАССИВЫ
==================================================
*/

function ArrayStateExample() {
  const [points, setPoints] = useState([]);

  function handleScoreClick() {
    setPoints([...points, 1]);
  }

  function handleReset() {
    setPoints([]);
  }

  function handleDoublePoints() {
    const updated = points.map((point) => point * 2);
    setPoints(updated);
  }

  return (
    <div className="example-block">
      <h4>Иммутабельный state + массивы</h4>

      <button onClick={handleScoreClick} style={{ marginRight: "8px" }}>
        Добавить 1
      </button>

      <button onClick={handleDoublePoints} style={{ marginRight: "8px" }}>
        Удвоить значения (map)
      </button>

      <button onClick={handleReset}>Сбросить</button>

      <hr />

      {/* 🔥 Отображение массива */}
      <p>Массив points: [{points.join(", ")}]</p>

      <p>JSON вид: {JSON.stringify(points)}</p>

      <hr />

      <ul>
        {points.map((point, index) => (
          <li key={index}>
            Элемент {index}: {point}
          </li>
        ))}
      </ul>

      <p>Всего элементов: {points.length}</p>
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 8 — STATE-ОБЪЕКТ И SPREAD ОБЪЕКТОВ
==================================================
*/

function ObjectStateExample() {
  // 1️⃣ State как объект
  const [user, setUser] = useState({
    name: "Alex",
    age: 25,
    isAdmin: false,
  });

  // 2️⃣ Изменение существующего свойства
  function changeName() {
    setUser({
      ...user,
      name: "John", // перезаписываем свойство
    });
  }

  // Изменение булевого значения
  function toggleAdmin() {
    setUser({
      ...user,
      isAdmin: !user.isAdmin,
    });
  }

  // 3️⃣ Добавление нового свойства
  function addCountry() {
    setUser({
      ...user,
      country: "Germany",
    });
  }

  // 4️⃣ Удаление ключа
  function removeAge() {
    const { age, ...rest } = user;
    setUser(rest);
  }

  return (
    <div className="example-block">
      <h4>State-объект + Spread</h4>

      <button onClick={changeName} style={{ marginRight: "8px" }}>
        Изменить имя
      </button>

      <button onClick={toggleAdmin} style={{ marginRight: "8px" }}>
        Переключить isAdmin
      </button>

      <button onClick={addCountry} style={{ marginRight: "8px" }}>
        Добавить country
      </button>

      <button onClick={removeAge}>Удалить age</button>

      <hr />

      <p>Объект user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 9 — МАССИВ ОБЪЕКТОВ (TODO С КНОПКОЙ "ВЫПОЛНЕНО")
==================================================
*/

function TodoExample() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Изучить useState", done: false },
    { id: 2, title: "Понять иммутабельность", done: true }, // по умолчанию выполнена
  ]);

  const [inputValue, setInputValue] = useState("");

  // Добавление задачи
  function addTask() {
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      title: inputValue,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  }

  // Удаление задачи
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Отметить как выполненную
  function markDone(id) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, done: true } : task)),
    );
  }

  return (
    <div className="example-block">
      <h4>Массив объектов (Todo)</h4>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите задачу"
        style={{ marginRight: "8px" }}
      />

      <button onClick={addTask}>Добавить</button>

      <hr />

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "8px" }}>
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
                marginRight: "8px",
              }}
            >
              {task.title}
            </span>

            {!task.done && (
              <button
                onClick={() => markDone(task.id)}
                style={{ marginRight: "8px" }}
              >
                Выполнена
              </button>
            )}

            <button onClick={() => deleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>

      <p>Всего задач: {tasks.length}</p>

      <hr />

      <p>JSON состояние:</p>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 10 — ФОРМЫ (CONTROLLED COMPONENTS)
==================================================
*/

function FormExample() {
  // 1️⃣ Дефолтные значения (state)
  const [form, setForm] = useState({
    name: "Alex",
    email: "",
  });

  // 2️⃣ Получение инпута (controlled)
  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value, // динамический ключ = email: "то, что напечатали"
    });
  }

  // 4️⃣ Отправка формы
  function handleSubmit(event) {
    event.preventDefault(); // не перезагружаем страницу

    alert(`Отправлено:\n${form.name}\n${form.email}`);
  }

  return (
    <div className="example-block">
      <h4>Формы в React</h4>

      {/* 4️⃣ Отправка формы */}
      <form onSubmit={handleSubmit}>
        {/* 6️⃣ Лейблы и доступность */}
        <label>
          Имя:
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Введите имя"
          />
        </label>

        <br />

        <label>
          Email:
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Введите email"
          />
        </label>

        <br />

        <button type="submit">Отправить</button>
      </form>

      <hr />

      <p>Состояние формы:</p>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
/*
==================================================
ПАРАГРАФ 11 — РЕФАКТОРИНГ ФОРМЫ И ПОДЪЁМ STATE
==================================================
*/

function NameForm({ name, onNameChange }) {
  return (
    <form>
      <label htmlFor="name">Имя: </label>

      <input
        type="text"
        id="name"
        value={name}
        onChange={onNameChange}
        placeholder="Введите имя"
      />
    </form>
  );
}
function Greeting2({ name }) {
  return <h3>Привет, {name || "незнакомец"} 👋</h3>;
}
/*
==================================================
ПАРАГРАФ 12 — useEffect и useLayoutEffect
==================================================
*/

function EffectExample() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isRunning, setIsRunning] = useState(true);

  // 1️⃣ useEffect — после рендера (асинхронно)
  useEffect(() => {
    console.log("useEffect: компонент отрендерен");

    // сюда идут:
    // - запросы к API
    // - подписки
    // - работа с localStorage
  });

  // 2️⃣ условный эффект (life-cycle по зависимости)
  useEffect(() => {
    console.log("useEffect: count изменился ->", count);
  }, [count]); // <--- только при изменении count

  // 3️⃣ cleanup (уборка)
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      console.log("тик...");
    }, 1000);

    // cleanup вызывается:
    // - при размонтировании
    // - перед повторным запуском эффекта
    return () => {
      clearInterval(timer);
      console.log("таймер очищен");
    };
  }, [isRunning]); // зависит от isRunning

  // 4️⃣ useLayoutEffect — до отрисовки в браузере (синхронно)
  useLayoutEffect(() => {
    console.log("useLayoutEffect: до показа UI");

    // подходит для:
    // - измерения DOM
    // - синхронных изменений перед отрисовкой
  }, []); // один раз при монтировании

  // управление таймером
  function stopTimer() {
    setIsRunning(false);
  }

  function startTimer() {
    setIsRunning(true);
  }

  return (
    <div className="example-block">
      <h4>useEffect + таймер + cleanup</h4>

      <p>count: {count}</p>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{ marginRight: "8px" }}
      >
        Увеличить
      </button>

      <button
        onClick={() => setVisible((prev) => !prev)}
        style={{ marginRight: "8px" }}
      >
        {visible ? "Скрыть" : "Показать"}
      </button>

      {visible && <p>Условный текст</p>}

      <hr />

      <p>Таймер: {isRunning ? "работает ⏳" : "остановлен 🛑"}</p>

      <button
        onClick={stopTimer}
        style={{ marginRight: "8px" }}
        disabled={!isRunning}
      >
        Остановить таймер
      </button>

      <button onClick={startTimer} disabled={isRunning}>
        Запустить таймер
      </button>
    </div>
  );
}
/*
==================================================
ПАРАГРАФ 13 — State внутри useEffect и его контроль
==================================================
*/

function EffectWithStateExample() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // 1️⃣ Эффект изменяет state (таймер)
  useEffect(() => {
    if (!isActive) return; // выключатель эффекта

    const timer = setInterval(() => {
      // ⚠ Важно использовать prev, иначе будет замыкание
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup
    return () => {
      clearInterval(timer);
      console.log("таймер остановлен");
    };
  }, [isActive]); // эффект зависит от переключателя

  function start() {
    setIsActive(true);
  }

  function stop() {
    setIsActive(false);
  }

  function reset() {
    setSeconds(0);
  }

  return (
    <div className="example-block">
      <h4>State внутри useEffect</h4>

      <p>Прошло секунд: {seconds}</p>
      <p>Статус: {isActive ? "работает ⏳" : "остановлен 🛑"}</p>

      <button
        onClick={start}
        disabled={isActive}
        style={{ marginRight: "8px" }}
      >
        Старт
      </button>

      <button
        onClick={stop}
        disabled={!isActive}
        style={{ marginRight: "8px" }}
      >
        Стоп
      </button>

      <button onClick={reset}>Сброс</button>
    </div>
  );
}
/*
==================================================
ПАРАГРАФ 14 — Асинхронные апдейты и localStorage
==================================================
*/

function LocalStorageExample() {
  // 6️⃣ Ленивый исходный стейт
  // функция выполнится ТОЛЬКО при первом рендере
  const [user, setUser] = useState(() => {
    console.log("Чтение из localStorage...");

    const saved = localStorage.getItem("user");

    // 5️⃣ Получение сохранённых данных
    return saved
      ? JSON.parse(saved)
      : {
          name: "Гость",
          age: 18,
          hobbies: ["React"],
        };
  });

  // 3️⃣ Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]); // эффект только при изменении user

  // 1️⃣ Асинхронные апдейты
  function changeName() {
    setUser((prev) => ({
      ...prev,
      name: "Алекс",
    }));

    console.log("После setUser:", user);
    // ⚠ здесь будет старое значение (state обновляется асинхронно)
  }

  // 4️⃣ Хранение массивов и объектов
  function addHobby() {
    setUser((prev) => ({
      ...prev,
      hobbies: [...prev.hobbies, "JS"],
    }));
  }

  // 7️⃣ Восстановление массива (пример очистки)
  function resetUser() {
    localStorage.removeItem("user");

    setUser({
      name: "Гость",
      age: 18,
      hobbies: [],
    });
  }

  return (
    <div className="example-block">
      <h4>Асинхронный state + localStorage</h4>

      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>

      <p>Хобби:</p>
      <ul>
        {user.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      <button onClick={changeName} style={{ marginRight: "8px" }}>
        Изменить имя
      </button>

      <button onClick={addHobby} style={{ marginRight: "8px" }}>
        Добавить хобби
      </button>

      <button onClick={resetUser}>Сбросить данные</button>
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 15 — Fetch API, Promises, ошибки
==================================================
*/

function FetchExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 3️⃣ Fetch в компоненте
  useEffect(() => {
    setLoading(true);

    // 2️⃣ Fetch API возвращает Promise
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        // 6️⃣ HTTP-ошибки (404, 500 и т.д.)
        if (!response.ok) {
          throw new Error("HTTP ошибка: " + response.status);
        }

        return response.json(); // тоже Promise
      })

      .then((json) => {
        setData(json);
      })

      // 7️⃣ Ошибки сети
      .catch((err) => {
        setError(err.message);
      })

      // 8️⃣ finally — выполняется всегда
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="example-block">
      <h4>Fetch API + Promises</h4>

      {/* 5️⃣ Оператор && */}
      {loading && <p>Загрузка...</p>}

      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}

      {/* 4️⃣ Проверка свойства */}
      {data && (
        <>
          <p>Имя: {data.name}</p>
          <p>Email: {data.email}</p>

          {/* если свойства нет — ничего не упадёт */}
          {data.company && <p>Компания: {data.company.name}</p>}
        </>
      )}
    </div>
  );
}
/*
==================================================
ПАРАГРАФ 16 — Fetch + OnClick
==================================================
*/

function FetchOnClick() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function loadUser() {
    setLoading(true);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP ошибка: " + response.status);
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <button onClick={loadUser} disabled={loading}>
        {loading ? "Загрузка..." : "Загрузить пользователя"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div>
          <p>Имя: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 17 — Fetch + OnChange
==================================================
*/
function FetchOnChange() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users?id=${query}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setLoading(false));
  }, [query]); // эффект при изменении query

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Введите ID"
      />

      {loading && <p>Загрузка...</p>}

      {data && data.length > 0 && <p>Найден пользователь: {data[0].name}</p>}
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 18 — Async/await и обработка ошибок
==================================================
*/

function AsyncAwaitExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadUser() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
      );

      // 2️⃣ события и ошибки HTTP
      if (!response.ok) {
        throw new Error("HTTP ошибка: " + response.status);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      // обработка ошибок
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={loadUser} disabled={loading}>
        {loading ? "Загрузка..." : "Загрузить"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div>
          <p>Имя: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 19 — POST-запросы
==================================================
*/

function PostExample() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function sendData() {
    setLoading(true);
    setError(null);

    try {
      // 1️⃣ структура POST-запроса
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Hello React",
            body: "POST request example",
            userId: 1,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("HTTP ошибка: " + response.status);
      }

      const json = await response.json();
      setResult(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={sendData} disabled={loading}>
        {loading ? "Отправка..." : "Отправить POST"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <h4>Ответ сервера:</h4>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 20 — Кастомные хуки: useEffect и useFetch
==================================================
*/

// 1️⃣ кастомный хук с useEffect и параметрами

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = "React App";
    };
  }, [title]); // эффект зависит от title
}

// 2️⃣ useFetch — универсальный хук для запросов
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP ошибка: " + response.status);
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]); // эффект при изменении url

  return { data, loading, error };
}

// 3️⃣ пример использования useFetch
function FetchWithHook() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users/1",
  );

  return (
    <div>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div>
          <p>Имя: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 21 — useRef
==================================================
*/

function UseRefExample() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [value, setValue] = useState("");

  // 1️⃣ доступ к DOM
  function focusInput() {
    inputRef.current?.focus();
  }

  // 2️⃣ mutable значение (без ререндера)
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите текст"
      />

      <button onClick={focusInput} style={{ marginLeft: "8px" }}>
        Фокус
      </button>

      <p>Рендеров: {renderCount.current}</p>
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 22 — Context API
==================================================
*/

// 1️⃣ создаём контекст
const ThemeContext = createContext("light");

// 2️⃣ provider (обёртка)
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3️⃣ хук для удобного доступа
function useTheme() {
  return useContext(ThemeContext);
}

// 4️⃣ пример использования
function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Текущая тема: {theme}</p>
      <button onClick={toggleTheme}>Сменить тему</button>
    </div>
  );
}

/*
==================================================
ПАРАГРАФ 23 — memo, useMemo, useCallback
==================================================
*/

// 1️⃣ мемоизированный компонент (не ререндерится без изменения props)
const ExpensiveChild = memo(function ExpensiveChild({ value, onClick }) {
  console.log("ExpensiveChild render");

  return (
    <div>
      <p>Значение: {value}</p>
      <button onClick={onClick}>Клик</button>
    </div>
  );
});

function MemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 2️⃣ useMemo — кешируем вычисления
  const computed = useMemo(() => {
    console.log("useMemo вычисление");
    return text.toUpperCase();
  }, [text]); // пересчитывается только при изменении text

  // 3️⃣ useCallback — кешируем функцию
  const handleClick = useCallback(() => {
    console.log("клик в дочернем");
  }, []); // функция не пересоздаётся при ререндере

  return (
    <div>
      <h4>memo, useMemo, useCallback</h4>

      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>

      <hr />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст"
      />

      <p>useMemo (верхний регистр): {computed}</p>

      <hr />

      <ExpensiveChild value={count} onClick={handleClick} />
    </div>
  );
}
/*
==================================================
ОСНОВНОЙ КОМПОНЕНТ APP
==================================================
*/

function App() {
  {
    /* ===== ДЛЯ ПАРАГРАФА 11 ===== */
  }
  const [name, setName] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  {
    /* ===== ДЛЯ ПАРАГРАФА 11 ===== */
  }

  return (
    <div className="container">
      <h1>📘 React Конспект</h1>

      {/* ===== ПАРАГРАФ 1 ===== */}
      <Paragraph title="Параграф 1: JSX, атрибуты и props">
        <Greeting name="Алексей" age={25} />
        <Greeting name="Мария" age={30} />
      </Paragraph>

      {/* ===== ПАРАГРАФ 2 ===== */}
      <Paragraph title="Параграф 2: Деструктуризация props">
        <GreetingDestructured name="Иван" age={28} />
        <GreetingDestructured name="Елена" age={22} />
      </Paragraph>

      {/* ===== ПАРАГРАФ 3 ===== */}
      <Paragraph title="Параграф 3: Простой props-блок">
        <SimplePropsExample text="Пример текста с синей рамкой" color="blue" />
        <SimplePropsExample
          text="Еще один пример с зеленой рамкой"
          color="green"
        />
      </Paragraph>

      {/* ===== ПАРАГРАФ 4 ===== */}
      <Paragraph title="Параграф 4: Спред-атрибуты">
        <p>
          Спред-атрибуты позволяют передавать все props сразу через{" "}
          <code>{`...props`}</code>, что упрощает код и делает компоненты более
          универсальными.
        </p>
        <SpreadExample />
      </Paragraph>

      {/* ===== ПАРАГРАФ 5 ===== */}
      <Paragraph title="Параграф 5: Деструктуризация массивов и из функций">
        <p>
          Деструктуризация помогает удобно "распаковывать" значения из массивов
          и объектов, в том числе возвращаемых из функций.
        </p>
        <ArrayAndFunctionDestruct />
      </Paragraph>

      {/* ===== ПАРАГРАФ 6 ===== */}
      <Paragraph title="Параграф 6: Хук useState">
        <p>
          useState позволяет компоненту хранить и изменять состояние. Он
          возвращает массив: [значение, функция изменения].
        </p>
        <UseStateExample />
      </Paragraph>

      {/* ===== ПАРАГРАФ 7 ===== */}
      <Paragraph title="Параграф 7: Иммутабельность и массивы">
        <p>
          В React нельзя напрямую изменять массивы. Нужно создавать новый массив
          через spread или map.
        </p>
        <ArrayStateExample />
      </Paragraph>

      {/* ===== ПАРАГРАФ 8 ===== */}
      <Paragraph title="Параграф 8: State как объект">
        <p>
          В React нельзя мутировать объекты напрямую. Нужно создавать новый
          объект через spread.
        </p>
        <ObjectStateExample />
      </Paragraph>

      {/* ===== ПАРАГРАФ 9 ===== */}
      <Paragraph title="Параграф 9: Массив объектов">
        <p>
          Работа с массивом объектов: добавление, удаление, изменение через map
          и filter.
        </p>
        <TodoExample />
      </Paragraph>

      {/* ===== ПАРАГРАФ 10 ===== */}
      <Paragraph title="Параграф 10: Формы">
        <FormExample />
      </Paragraph>

      {/* ===== ПАРАГРАФ 11 ===== */}
      <Paragraph title="Параграф 11: Рефакторинг формы, подъем стейта">
        <NameForm name={name} onNameChange={handleNameChange} />

        <Greeting2 name={name} />
      </Paragraph>

      {/* ===== ПАРАГРАФ 12 ===== */}
      <Paragraph title="Параграф 12: useEffect">
        <p>
          useEffect нужен для side effects: запросы, подписки, таймеры, работа с
          DOM.
        </p>
        <EffectExample />
      </Paragraph>

      {/* ===== ПАРАГРАФ 13 ===== */}
      <Paragraph title="Параграф 13: State в useEffect">
        <EffectWithStateExample />
      </Paragraph>

      {/* ===== ПАРАГРАФ 14 ===== */}
      <Paragraph title="Параграф 14: localStorage и асинхронность">
        <LocalStorageExample />
      </Paragraph>

      {/* ===== ПАРАГРАФ 15 ===== */}
      <Paragraph title="Параграф 15: Fetch API">
        <FetchExample />
      </Paragraph>

      {/* ===== ПАРАГРАФ 16 ===== */}
      <Paragraph title="Параграф 16: Fetch + onClick">
        <FetchOnClick />
      </Paragraph>

      {/* ===== ПАРАГРАФ 17 ===== */}
      <Paragraph title="Параграф 17:Fetch + onChange">
        <FetchOnChange />
      </Paragraph>

      {/* ===== ПАРАГРАФ 18 ===== */}
      <Paragraph title="Параграф 18: Async/await">
        <AsyncAwaitExample />
      </Paragraph>

      {/* ===== ПАРАГРАФ 19 ===== */}
      <Paragraph title="Параграф 19: POST-запросы">
        <PostExample />
      </Paragraph>

      {/* ===== ПАРАГРАФ 20 ===== */}
      <Paragraph title="Параграф 20: Кастомные хуки">
        <FetchWithHook />
      </Paragraph>

      {/* ===== ПАРАГРАФ 21 ===== */}
      <Paragraph title="Параграф 21: useRef">
        <UseRefExample />
      </Paragraph>

      <Paragraph title="Параграф 22: Context API">
        <ThemeProvider>
          <ThemeSwitcher />
        </ThemeProvider>
      </Paragraph>
      <Paragraph title="Параграф 4: memo, useMemo, useCallback">
        <MemoExample />
      </Paragraph>
    </div>
  );
}

// Рендер
createRoot(document.querySelector("#root")).render(<App />);
