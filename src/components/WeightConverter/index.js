import React, { useState, useEffect } from "react";
import "./index.css";
const WeightConversion = () => {
  const [inputWeight, setInputWeight] = useState("");
  const [outputWeight, setOutputWeight] = useState(0);
  const [inputWeightType, setInputWeightType] = useState("kilograms");
  const [outputWeightType, setOutputWeightType] = useState("kilograms");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const onAddNumber = (val) => {
    setInputWeight(inputWeight + val);
    convertWeight();
  };

  const onChangeInputType = (event) => {
    setInputWeightType(event.target.value);
    convertWeight();
  };
  const onChangeOutputType = (event) => {
    setOutputWeightType(event.target.value);
    convertWeight();
  };

  const deleteElement = () => {
    setInputWeight(
      inputWeight.replace(inputWeight[inputWeight.length - 1], "")
    );
  };

  function convertWeight() {
    let result;
    let input = inputWeight;
    if (inputWeight === "") {
      input = 0;
    }
    if (inputWeightType === "kilograms") {
      if (outputWeightType === "grams") {
        result = input * 1000;
      } else if (outputWeightType === "pounds") {
        result = input * 2.20462;
      } else if (outputWeightType === "ounces") {
        result = input * 35.274;
      } else {
        result = input;
      }
    } else if (inputWeightType === "grams") {
      if (outputWeightType === "kilograms") {
        result = input / 1000;
      } else if (outputWeightType === "pounds") {
        result = input / 453.592;
      } else if (outputWeightType === "ounces") {
        result = input / 28.3495;
      } else {
        result = input;
      }
    } else if (inputWeightType === "pounds") {
      if (outputWeightType === "kilograms") {
        result = input / 2.20462;
      } else if (outputWeightType === "grams") {
        result = input * 453.592;
      } else if (outputWeightType === "ounces") {
        result = input * 16;
      } else {
        result = input;
      }
    } else if (inputWeightType === "ounces") {
      if (outputWeightType === "kilograms") {
        result = input / 35.274;
      } else if (outputWeightType === "grams") {
        result = input * 28.3495;
      } else if (outputWeightType === "pounds") {
        result = input / 16;
      } else {
        result = input;
      }
    }
    setOutputWeight(result);
  }

  useEffect(() => {
    convertWeight();
  });
  return (
    <div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={inputWeight} />
          <select
            name='time'
            className='inputs'
            id='time'
            onChange={onChangeInputType}
          >
            <option value='kilograms'>Kilograms</option>
            <option value='grams'>Grams</option>
            <option value='pounds'>Pounds</option>
            <option value='ounces'>Ounces</option>
          </select>
        </div>
      </div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={outputWeight} />
          <select
            name='time'
            className='inputs'
            id='time'
            onChange={onChangeOutputType}
          >
            <option value='kilograms'>Kilograms</option>
            <option value='grams'>Grams</option>
            <option value='pounds'>Pounds</option>
            <option value='ounces'>Ounces</option>
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
            setInputWeight("");
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

export default WeightConversion;
