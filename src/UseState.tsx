function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <h1>Use State Implementation</h1>
      <h2>Count</h2>
      <div className="card">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span style={{ padding: 5 }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default UseState;

let firstRender = false;

let internalState: any;
function internalSetState(newState: any) {
  internalState = newState;
  console.log("new internalState", internalState);
  window.render();
}

function useState(initialState: any) {
  if (firstRender === false) {
    firstRender = true;
    internalState = initialState;
  }
  console.log("internalState", internalState);
  return [internalState, internalSetState];
}
