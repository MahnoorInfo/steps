import { useState } from "react";

function TimeTraval() {
  const [count, setCount] = useState(0);

  const Current_Date = new Date("june 21 2027");
  Current_Date.setDate(Current_Date.getDate() + count);

  return (
    <>
      <label style={{ marginLeft: "300px" }}> Time Traval component </label>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          marginLeft: "300px",
        }}
      >
        <button onClick={() => setCount((c) => c + 1)}> + </button>
        <p>count: {count}</p>
        <button onClick={() => setCount((c) => c - 1)}> - </button>
      </div>

      <span style={{ marginLeft: "300px" }}>
        {" "}
        {Current_Date.toDateString()}{" "}
      </span>
    </>
  );
}

// * Important information is hilighted
// ! alert
// ? Do we need to expose this api?

//TODO  To check date is past or future or today
//TODO so can show like 1 year 2 months 1 day ago or show like 1 year 3 month 3days from now

export default TimeTraval;
