import { useState, useTransition } from "react"; //1.import
export default function HelloMyNamePage() {
  // 2. call useState
  const [name, setName] = useState("");

  //5.
  const nameInputOnchange = (event: any) => {
    //console.log(event);
    //event ใน onChange เป็นอ็อบเจกต์ที่มีข้อมูลของ input เช่น
    //แบบเดิม = คุณพยายามเก็บอ็อบเจกต์ทั้งก้อนลงใน name (ซึ่งเป็น string) → จึงเกิด Type Error
    setName(event.target.value);
  };
  //6.
  //const [Result, setResult] = useState("");
  //9.
  const [Result, setResult] = useState("Please insert your name");
  //7. เปลี่ยนสี
  const [isGreeOk, setGreetOk] = useState(false);
  const greetBtnOnclike = () => {
    if (name == "") {
      setResult("Please insert your name");
      //ถ้าเป็น
      setGreetOk(false);
    } else {
      setResult(`Hello ${name}`);
      setGreetOk(true);
    }
  };
  return (
    <div>
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        // 4.เรียกใช้ event
        onChange={nameInputOnchange}
        value={name}
      />
      <button className="btn btn-primary" onClick={greetBtnOnclike}>
        Greet Me
      </button>
      {/* 3. Result Text */}
      {/* 8. */}
      {/* <p className="text-danger">{Result}</p> */}
      {/* 9. เปลี่ยน calassName เป็นเงื่อนไข */}
      <p className={isGreeOk ? "" : "text-danger"}>{Result}</p>
    </div>
  );
}
