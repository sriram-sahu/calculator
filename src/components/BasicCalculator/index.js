import { useState } from "react";
import { MdCancel } from "react-icons/md";

const BasicCalculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let operators = ["^", "+", "-", "*", "/", "%"];
  let trigonometry = ["sin", "cos", "tan", "log"];
  let newOperator = ["*", "/", "%", "^"];
  let oldOperators = ["+", "-", "*", "/", "%"];

  const onAddNumber = (val) => {
    const num = val;
    let str = String(displayValue) + val;
    setDisplayValue(str);
  };

  const onChangeInput = (event) => {
    let val = event.nativeEvent.data;
    if (val === null) {
      let string = displayValue.slice(0, -1);
      setDisplayValue(string);
    }
    if (numbers.includes(val) || operators.includes(val)) {
      onAddOperator(val);
    }
  };
  const onAddOperator = (val) => {
    let str = String(displayValue) + val;
    let lastVal = displayValue.slice(displayValue.length - 1);
    let firstVal = str[0];
    console.log(firstVal);
    console.log(lastVal);
    if (newOperator.includes(firstVal)) {
      setDisplayValue(0 + str);
    } else if (!oldOperators.includes(lastVal)) {
      setDisplayValue(str);
    } else {
      let array = displayValue.split("");
      array.pop();
      array = array.join();
      setDisplayValue(String(array) + val);
    }
  };

  const calculateResult = () => {
    try {
      let calculateValue = displayValue.replace("^", "**");
      calculateValue = calculateValue.replace("%", "/100*");
      calculateValue = calculateValue.replace(/mod/g, "%");
      console.log(calculateValue);
      let firstVal = calculateValue[0];
      let array = displayValue.split("√");
      console.log(array);
      let result = "";
      if (array.length === 2) {
        let a = eval(array[1]);
        let b = eval(array[0]);
        console.log(a, b);
        if (b == "") {
          calculateSquareRoot();
          console.log(displayValue);
        } else {
          if (a < 0) {
            a = Math.abs(a);
            result = eval(a ** (1 / b));
            setDisplayValue("-" + String(result));
          } else {
            setDisplayValue(String(result));
          }
        }
      } else if (firstVal === "-") {
        let val = 0 + displayValue;
        result = new Function(`return  ${val}`)();
        setDisplayValue(String(result));
      } else {
        result = new Function(`return  ${calculateValue}`)();
        setDisplayValue(String(result));
      }
    } catch {
      setDisplayValue("Invalid");
    }
  };

  const deleteElement = () => {
    setDisplayValue(
      displayValue.replace(displayValue[displayValue.length - 1], "")
    );
  };

  const calculateFactorial = () => {
    let total = 1;
    let number = Number(displayValue);
    for (let i = 1; i <= number; i++) {
      total *= i;
      console.log(total, "1");
    }
    setDisplayValue(String(total));
  };

  const calculateSquareRoot = () => {
    let result;
    if (displayValue[0] === "√") {
      result = Math.sqrt(displayValue.slice(1));
      console.log(result);
    } else {
      result = Math.sqrt(displayValue);
    }
    setDisplayValue(String(result));
  };

  const calculateTrigonometry = (val) => {
    let result = 0;
    let degree = Number(displayValue) * (Math.PI / 180);
    console.log(Math.sin(90));
    if (val === "sin") {
      result = Math.sin(degree);
    } else if (val === "cos") {
      result = Math.cos(degree);
    } else if (val === "tan") {
      result = Math.sin(degree) / Math.cos(degree);
      console.log(result);
    } else if (val === "log") {
      result = Math.log10(Number(displayValue));
    }
    setDisplayValue(String(Math.round(result, 10)));
  };

  return (
    <div>
      {console.log(displayValue)}
      <input
        type='input'
        className='input form-control'
        value={displayValue}
        onChange={onChangeInput}
      />
      <div className='btn-container'>
        <div>
          <button
            className='btn btn-danger button2'
            onClick={() => {
              setDisplayValue("");
            }}
          >
            C
          </button>
          <button className='btn btn-danger button2' onClick={deleteElement}>
            {/* &#8592;&#10006; */}
            <MdCancel className='icon' />
          </button>
          <button
            className='btn btn-danger button2'
            onClick={() => onAddOperator("(")}
          >
            (
          </button>
          <button
            className='btn btn-danger button2'
            onClick={() => onAddOperator(")")}
          >
            )
          </button>

          {trigonometry.map((each) => (
            <button
              key={each}
              className='btn btn-danger button2'
              onClick={() => calculateTrigonometry(each)}
            >
              {each}
            </button>
          ))}
          <br />
          <button
            className='btn btn-danger button2'
            onClick={() => calculateFactorial()}
          >
            n!
          </button>
          <button
            className='btn btn-danger button2'
            onClick={() => calculateSquareRoot()}
          >
            √
          </button>
          <button
            className='btn btn-danger button2'
            onClick={() => onAddOperator("√")}
          >
            x√y
          </button>
          <button
            className='btn btn-danger button2'
            onClick={() => onAddOperator("mod")}
          >
            mod
          </button>
          <br />
          {numbers.map((each) => (
            <button
              key={each}
              className='btn btn-danger button1'
              onClick={() => onAddNumber(each)}
            >
              {each}
            </button>
          ))}
          <button
            className='btn btn-danger button1'
            onClick={() => onAddNumber(".")}
          >
            .
          </button>
          <button className='btn btn-danger button1' onClick={calculateResult}>
            =
          </button>
        </div>
        <div className='operator-button'>
          {operators.map((each) => (
            <button
              key={each}
              className='btn btn-danger button'
              onClick={() => onAddOperator(each)}
            >
              {each}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicCalculator;
