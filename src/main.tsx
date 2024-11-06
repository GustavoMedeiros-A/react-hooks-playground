import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseState from "./UseState.tsx";
import UseRef from "./UseRef.tsx";
import "./App.css";

// Forçar reenderizalçao pra simular o useState

const root = createRoot(document.getElementById("root")!);

function render() {
  root.render(
    <StrictMode>
      <div className="container">
        <div className="section">
          <UseState />
        </div>
        <div className="section" style={{ borderBottom: "none" }}>
          <UseRef />
        </div>
      </div>
    </StrictMode>
  );
}

render();
window.render = render;
