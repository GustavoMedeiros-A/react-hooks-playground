import { useState } from "react";

// Sempre que o UseState renderiza novamente o componente, o UseRef consegue manter o estado sem que seja alterado pela nova renderização

function UseRef() {
  const [counter, setCounter] = useState(0);
  const ref = useRef(0);

  function handleClick() {
    console.log(ref.current, "count");
    ref.current++;
  }

  return (
    <div>
      <h1>Use Ref Implementation</h1>
      <input type="text" />
      <button onClick={handleClick}>incremet count</button>
      <p>Ref {ref.current}</p>
      <p>{counter}</p>
      <button onClick={() => setCounter((c) => c + 1)}>+1</button>
    </div>
  );
}

export default UseRef;

let isFirstRender = true;

const state = {
  current: undefined as any,
};

function useRef(value: any) {
  if (isFirstRender) {
    isFirstRender = false;
    state.current = value;
  }
  return state;
}
