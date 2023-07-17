import React, { useState, useEffect } from "react";
// import "./index.css";

const AreaConversion = () => {
  const [inputArea, setInputArea] = useState("");
  const [outputArea, setOutputArea] = useState(0);
  const [inputAreaType, setInputAreaType] = useState("square-meters");
  const [outputAreaType, setOutputAreaType] = useState("square-meters");

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const onAddNumber = (val) => {
    setInputArea(inputArea + val);
    convertArea();
  };

  const onChangeInputType = (event) => {
    setInputAreaType(event.target.value);
    convertArea();
  };

  const onChangeOutputType = (event) => {
    setOutputAreaType(event.target.value);
    convertArea();
  };
  const deleteElement = () => {
    setInputArea(inputArea.replace(inputArea[inputArea.length - 1], ""));
  };

  function convertArea() {
    let input = inputArea;
    if (inputArea === "") {
      input = 0;
    }
    let result;
    if (inputAreaType === "square-meters") {
      if (outputAreaType === "square-kilometers") {
        result = parseInt(input) / 1000000;
      } else if (outputAreaType === "square-feet") {
        result = parseInt(input) * 10.7639;
      } else if (outputAreaType === "hectares") {
        result = parseInt(input) / 10000;
      } else if (outputAreaType === "square-inches") {
        result = parseInt(input) * 1550;
      } else {
        result = parseInt(input);
      }
    } else if (inputAreaType === "square-kilometers") {
      if (outputAreaType === "square-meters") {
        result = parseInt(input) * 1000000;
      } else if (outputAreaType === "square-feet") {
        result = parseInt(input) * 10763910.4;
      } else if (outputAreaType === "hectares") {
        result = parseInt(input) * 100;
      } else if (outputAreaType === "square-inches") {
        result = parseInt(input) * 1550003100;
      } else {
        result = parseInt(input);
      }
    } else if (inputAreaType === "square-feet") {
      if (outputAreaType === "square meters") {
        result = parseInt(input) / 10.7639;
      } else if (outputAreaType === "square kilometers") {
        result = parseInt(input) / 10763910.4;
      } else if (outputAreaType === "hectares") {
        result = parseInt(input) / 107639.104;
      } else if (outputAreaType === "square-inches") {
        result = parseInt(input) * 144;
      } else {
        result = parseInt(input);
      }
    } else if (inputAreaType === "hectares") {
      if (outputAreaType === "square-meters") {
        result = parseInt(input) * 10000;
      } else if (outputAreaType === "square-kilometers") {
        result = parseInt(input) / 100;
      } else if (outputAreaType === "square-feet") {
        result = parseInt(input) * 107639.104;
      } else if (outputAreaType === "square-inches") {
        result = parseInt(input) * 15500031;
      } else {
        result = parseInt(input);
      }
    } else if (inputAreaType === "square-inches") {
      if (outputAreaType === "square-meters") {
        result = parseInt(input) / 1550;
      } else if (outputAreaType === "square-kilometers") {
        result = parseInt(input) / 1550003100;
      } else if (outputAreaType === "square-feet") {
        result = parseInt(input) / 144;
      } else if (outputAreaType === "hectares") {
        result = parseInt(input) / 15500031;
      } else {
        result = parseInt(input);
      }
    }
    setOutputArea(result);
  }

  useEffect(() => {
    convertArea();
  }, [inputArea, inputAreaType, outputAreaType]);

  return (
    <div>
      <div className='display'>
        <input type='text' className='input' value={inputArea} />
        <select
          name='area'
          className='inputs'
          id='area'
          onChange={onChangeInputType}
        >
          <option value='square-meters'>square meters</option>
          <option value='square-kilometers'>square kilometers</option>
          <option value='square-feet'>square feet</option>
          <option value='square-inches'>square inches</option>
        </select>
      </div>
      <div className='display'>
        <input type='text' className='input' value={outputArea} />
        <select
          name='area'
          className='inputs'
          id='area'
          onChange={onChangeOutputType}
        >
          <option value='square-meters'>square meters</option>
          <option value='square-kilometers'>square kilometers</option>
          <option value='square-feet'>square feet</option>
          <option value='square-inches'>square inches</option>
        </select>
      </div>
      <div>
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
          onClick={() => {
            setInputArea("");
          }}
        >
          C
        </button>
        <button className='btn btn-danger button1' onClick={deleteElement}>
          X
        </button>
      </div>
    </div>
  );
};

export default AreaConversion;
