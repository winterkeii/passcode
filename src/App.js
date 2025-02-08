import { useState } from 'react';
import './App.css';

function Key({ label, clickHandler, className }) {
  return (
    <button onClick={clickHandler} className={className}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return <div className="Display">{display}</div>;
}

function App() {
  const [disp, setDisp] = useState("INPUT CODE");
  const [num1, setNum1] = useState("");
  const [pin, setPin] = useState("1234567890");
  const [step, setStep] = useState(0);

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setNum1(num1 + value);
    setDisp(num1 + value);
  };

  const enterClickHandler = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (num1 === pin) {
        setDisp("ENTER NEW CODE");
        setStep(2);
        setNum1("");
      } else {
        setDisp("INVALID CODE");
        setStep(0);
      }
    } else if (step === 2) {
      if (num1.length >= 8) {
        setPin(num1);
        setDisp("CHANGE CODE SUCCESSFUL");
      } else {
        setDisp("CODE MUST BE 8 DIGITS");
      }
      setStep(0);
      setNum1("");
    } else {
      setDisp(num1 === pin ? "OPEN" : "LOCKED");
      setNum1("");
    }
  };

  const resetClickHandler = (e) => {
    e.preventDefault();
    setDisp("INPUT CODE");
    setNum1("");
    setStep(0);
  };

  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp("JOHN LEO MEDINA");
  };

  const subjectClickHandler = (e) => {
    e.preventDefault();
    setDisp("C-PEITEL3");
  };

  const pinClickHandler = (e) => {
    e.preventDefault();
    setDisp("ENTER CURRENT CODE");
    setStep(1);
    setNum1("");
  };

  return (
    <div className="Calculator">
      <div className="Calcontainer">
        <div className="Displaycon">
          <Display display={disp} />
        </div>
        <div className="Buttons">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
            <Key key={num} label={num} clickHandler={numClickHandler} />
          ))}
          <Key className="clear-Key" label="Reset" clickHandler={resetClickHandler} />
          <Key label={0} clickHandler={numClickHandler} />
          <Key className="enter-Key" label="Enter" clickHandler={enterClickHandler} />
          <Key className="MEDINA" label="Name" clickHandler={nameClickHandler} />
          <Key className="MEDINA" label="Subject" clickHandler={subjectClickHandler} />
          <Key className="MEDINA" label="Pin" clickHandler={pinClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
