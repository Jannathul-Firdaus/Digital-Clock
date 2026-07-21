import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = String(time.getHours() % 12 || 12).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  const ampm = time.getHours() >= 12 ? "PM 🌙" : "AM ☀️";

  const date = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container">
      <h1>Digital Clock</h1>

      <p>Live time updates using useEffect</p>

      <div className="App">
        <div className="time">
          <span id="hours">{hours}</span>
          <span>:</span>
          <span id="minutes">{minutes}</span>
          <span>:</span>
          <span id="seconds">{seconds}</span>
        </div>

        <div className="labels">
          <span>HOURS</span>
          <span>MINUTES</span>
          <span>SECONDS</span>
        </div>

        <div className="date">📅 {date}</div>

        <div id="ampm">{ampm}</div>
      </div>
    </div>
  );
}

export default App;