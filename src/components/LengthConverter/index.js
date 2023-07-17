import React, { useState, useEffect } from "react";
import "./index.css";
const LengthConversion = () => {
  const [inputLength, setInputLength] = useState("");
  const [outputLength, setOutputLength] = useState(0);
  const [inputLengthType, setInputLengthType] = useState("meters");
  const [outputLengthType, setOutputLengthType] = useState("meters");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const onAddNumber = (val) => {
    setInputLength(inputLength + val);
    convertLength();
  };

  const onChangeInputType = (event) => {
    setInputLengthType(event.target.value);
    convertLength();
  };
  const onChangeOutputType = (event) => {
    setOutputLengthType(event.target.value);
    convertLength();
  };

  const deleteElement = () => {
    setInputLength(
      inputLength.replace(inputLength[inputLength.length - 1], "")
    );
  };

  function convertLength() {
    let result;
    let input = inputLength;
    if (inputLength === "") {
      input = 0;
    }
    if (inputLengthType === "meters") {
      if (outputLengthType === "kilometers") {
        result = parseInt(input) / 1000;
      } else if (outputLengthType === "feet") {
        result = parseInt(input) * 3.28084;
      } else if (outputLengthType === "inches") {
        result = parseInt(input) * 39.3701;
      } else {
        result = parseInt(input);
      }
    } else if (inputLengthType === "kilometers") {
      if (outputLengthType === "meters") {
        result = parseInt(input) * 1000;
      } else if (outputLengthType === "feet") {
        result = parseInt(input) * 3280.84;
      } else if (outputLengthType === "inches") {
        result = parseInt(input) * 39370.1;
      } else {
        result = parseInt(input);
      }
    } else if (inputLengthType === "feet") {
      if (outputLengthType === "meters") {
        result = parseInt(input) / 3.28084;
      } else if (outputLengthType === "kilometers") {
        result = parseInt(input) / 3280.84;
      } else if (outputLengthType === "inches") {
        result = parseInt(input) * 12;
      } else {
        result = parseInt(input);
      }
    } else if (inputLengthType === "inches") {
      if (outputLengthType === "meters") {
        result = parseInt(input) / 39.3701;
      } else if (outputLengthType === "kilometers") {
        result = parseInt(input) / 39370.1;
      } else if (outputLengthType === "feet") {
        result = parseInt(input) / 12;
      } else {
        result = parseInt(input);
      }
    }
    setOutputLength(result);
  }

  useEffect(() => {
    convertLength();
  });
  return (
    <div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={inputLength} />
          <select
            name='time'
            className='inputs'
            id='time'
            onChange={onChangeInputType}
          >
            <option value='meters'>meters</option>
            <option value='kilometers'>kilometers</option>
            <option value='feet'>feet</option>
            <option value='inches'>inches</option>
          </select>
        </div>
      </div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={outputLength} />
          <select
            name='time'
            className='inputs'
            id='time'
            onChange={onChangeOutputType}
          >
            <option value='meters'>meters</option>
            <option value='kilometers'>kilometers</option>
            <option value='feet'>feet</option>
            <option value='inches'>inches</option>
          </select>
        </div>
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
            setInputLength("");
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

export default LengthConversion;
