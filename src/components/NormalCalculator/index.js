import React, { useState, useEffect } from "react";

const NormalCalculator = () => {
  const [calculation, setCalculation] = useState("");
  const [total, setTotal] = useState(0);
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let operators = ["+", "-", "*", "/", "%"];
  let trigonometry = ["sin", "cos", "tan", "log"];

  const onAddNumber = (val) => {
    let str = String(calculation) + val;
    setCalculation(str);
  };

  const onAddOperator = (val) => {
    let str = calculation + val;
    const operators = ["+", "-", "*", "/"];
    let currentNumber = "";
    let result = [];

    for (let i = 0; i < calculation.length; i++) {
      const currentChar = calculation.charAt(i);
      if (operators.includes(currentChar)) {
        console.log(calculation);
        result.push(currentNumber);
        result.push(currentChar);
        currentNumber = "";
      } else if (!isNaN(currentChar)) {
        currentNumber += currentChar;
      }
    }
    result.push(currentNumber);
    let array = result;
    console.log(array);
    // let str = calculation + val;
    let element = str.slice(calculation.length - 2, calculation.length);
    let elements = element.trim(" ");
    // let array = getValuesArray();
    // console.log(array, total);

    if (
      elements === "+" ||
      elements === "-" ||
      elements === "*" ||
      elements === "/"
    ) {
      // console.log(element);
      // str.replace(elements, ` ${val} `);
      // setCalculation(str);
    } else {
      if (array.length === 3) {
        let ans = 0;
        if (array[1] === "+") {
          ans = Number(array[0]) + Number(array[2]);
          setCalculation(ans + val);
          setTotal(ans);
        } else if (array[1] === "-") {
          ans = Number(array[0]) - Number(array[2]);
          setCalculation(ans + val);
          setTotal(ans);
        } else if (array[1] === "*") {
          ans = Number(array[0]) * Number(array[2]);
          setCalculation(ans + val);
          setTotal(ans);
        } else if (array[1] === "/") {
          ans = Number(array[0]) / Number(array[2]);
          setCalculation(ans + val);
          setTotal(ans);
        }
      } else {
        setCalculation(str);
      }
      //calculateResult();
    }
  };

  const deleteElement = () => {
    setCalculation(
      calculation.replace(calculation[calculation.length - 1], "")
    );
  };

  const calculateTrigonometry = (val) => {
    let result = 0;

    if (val === "sin") {
      result = Math.sin(calculation * (Math.PI / 180));
    } else if (val === "cos") {
      result = Math.cos(calculation * (Math.PI / 180));
    } else if (val === "tan") {
      result = Math.tan(calculation * (Math.PI / 180));
    } else if (val === "log") {
      result = Math.tan(calculation * (Math.PI / 180));
    }
    setCalculation(`${val}(${calculation}) = ${result}`);
  };

  const calculateResult = () => {
    const operators = ["+", "-", "*", "/", "%"];
    let currentNumber = "";
    let result = [];

    for (let i = 0; i < calculation.length; i++) {
      const currentChar = calculation.charAt(i);
      if (operators.includes(currentChar)) {
        result.push(currentNumber);
        result.push(currentChar);
        currentNumber = "";
      } else if (!isNaN(currentChar)) {
        currentNumber += currentChar;
      }
    }
    result.push(currentNumber);
    let array = result;
    console.log(array);
    if (array.length === 3) {
      let ans = 0;
      if (array[1] === "+") {
        ans = Number(array[0]) + Number(array[2]);
        setCalculation(ans);
        setTotal(ans);
      } else if (array[1] === "-") {
        ans = Number(array[0]) - Number(array[2]);
        setCalculation(ans);
        setTotal(ans);
      } else if (array[1] === "*") {
        ans = Number(array[0]) * Number(array[2]);
        setCalculation(ans);
        setTotal(ans);
      } else if (array[1] === "/") {
        ans = Number(array[0]) / Number(array[2]);
        setCalculation(ans);
        setTotal(ans);
      } else if (array[1] === "%") {
        ans = Number(array[0]) % Number(array[2]);
        setCalculation(ans);
        setTotal(ans);
      }
    }
  };

  return (
    <div className='calculator'>
      <div>
        <input type='text' className='input' value={calculation} />
        <div className='button-container'>
          <div>
            <div>
              <button
                className='btn btn-danger button1'
                onClick={() => {
                  setCalculation("");
                  setTotal(0);
                }}
              >
                Clear
              </button>
            </div>
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
              key={"."}
              className='btn btn-danger button1'
              onClick={() => onAddNumber(".")}
            >
              .
            </button>
            <button
              key={"="}
              className='btn btn-danger button1'
              onClick={calculateResult}
            >
              =
            </button>
            {trigonometry.map((each) => (
              <button
                key={each}
                className='btn btn-danger button1'
                onClick={() => calculateTrigonometry(each)}
              >
                {each}
              </button>
            ))}
          </div>
          <div className='operators'>
            <div>
              <button className='btn btn-danger button' onClick={deleteElement}>
                X
              </button>
            </div>
            {operators.map((each) => (
              <button
                key={each}
                className='btn btn-danger button'
                onClick={() => onAddOperator(`${each}`)}
              >
                {each}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalCalculator;
