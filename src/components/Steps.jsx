import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step == 1 ? "active" : ""}>1</div>
            <div className={step == 2 ? "active" : ""}>2</div>
            <div className={step == 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step: {step}: {messages[step - 1]}{" "}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => {
                if (step > 1) setStep((s) => s - 1);
              }}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => {
                if (step < 3) setStep((s) => s + 1);
              }}
            >
              {" "}
              Next{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// optimized above code

// function Steps () {

//     const step = 1;
//     const buttons = ['Previous', 'Next'];
//     const buttonStyle = {backgroundColor:"#7950f2", color: "#fff"};

//     return (
//     <div className="steps">
//         <div className="numbers">
//             {messages.map((msg, index) => <div className={`${step == index+1 ? 'active' : '' }`} key={msg}> {index+1} </div>)}
//         </div>
//         <div className="message"> step {step}: {messages[step-1]} </div>

//         <div className="buttons">
//          {buttons.map((btn) => (
//             <button style={buttonStyle} key={btn}> {btn} </button>
//          ))}
//         </div>
//     </div>
//     )

// }

export default Steps;
