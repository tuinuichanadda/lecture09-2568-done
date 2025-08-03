import { useState } from "react";
export default function CounterPage() {
  const [count, setCount] = useState(0);
  //ตัวแปร , เก็บค่าตัวแปร = สถานะค่าเริ่มต้น เป็น 0 ;
  let count2 = 0;

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
