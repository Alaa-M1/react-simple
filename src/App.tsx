import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useOnlineStatus from "./pages/container/hooks/useOnlineStatus";

function App() {
  const isOnline = useOnlineStatus();
  return (
    <div className="App">
      <header className="App-header">
        <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
