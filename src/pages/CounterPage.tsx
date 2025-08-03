import { useState } from "react";
export default function CounterPage() {
  const [count, setCount] = useState(0);

  const addCounter = () => {
    setCount(count + 1); //แบบใช้ตัวแปร Stdte
    //count2++; แบบตัวแปรธรรมดา
  };
  return (
    <div className="container text-center">
      <h2>Counter Page</h2>
      <p>Counter: {count}</p>
      <button onClick={addCounter}>Increase</button>
    </div>
  );
}
