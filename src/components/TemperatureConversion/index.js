import React, { useState, useEffect } from "react";
import "./index.css";

const TemperatureConversion = () => {
  const [inputTemperature, setInputTemperature] = useState("");
  const [outputTemperature, setOutputTemperature] = useState(0);
  const [inputTemperatureType, setInputTemperatureType] = useState("celsius");
  const [outputTemperatureType, setOutputTemperatureType] = useState("celsius");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const onAddNumber = (val) => {
    setInputTemperature(inputTemperature + val);
    convertTemperature();
  };

  const onChangeInputType = (event) => {
    setInputTemperatureType(event.target.value);
    convertTemperature();
  };
  const onChangeOutputType = (event) => {
    setOutputTemperatureType(event.target.value);
    convertTemperature();
  };

  const deleteElement = () => {
    setInputTemperature(
      inputTemperature.replace(
        inputTemperature[inputTemperature.length - 1],
        ""
      )
    );
  };

  const convertTemperature = () => {
    let input = inputTemperature;
    if (inputTemperature === "") {
      input = 0;
    }
    if (inputTemperatureType === outputTemperatureType) {
      setOutputTemperature(parseInt(input));
    } else if (
      inputTemperatureType === "celsius" &&
      outputTemperatureType === "fahrenheit"
    ) {
      setOutputTemperature((parseInt(input) * 9) / 5 + 32);
    } else if (
      inputTemperatureType === "celsius" &&
      outputTemperatureType === "kelvin"
    ) {
      setOutputTemperature(parseInt(input) + 273);
    } else if (
      inputTemperatureType === "fahrenheit" &&
      outputTemperatureType === "kelvin"
    ) {
      setOutputTemperature(((parseInt(input) - 32) * 5) / 9 + 273);
    } else if (
      inputTemperatureType === "fahrenheit" &&
      outputTemperatureType === "celsius"
    ) {
      setOutputTemperature(((parseInt(input) - 32) * 5) / 9);
    } else if (
      inputTemperatureType === "kelvin" &&
      outputTemperatureType === "celsius"
    ) {
      setOutputTemperature(parseInt(input) - 273);
    } else if (
      inputTemperatureType === "kelvin" &&
      outputTemperatureType === "fahrenheit"
    ) {
      setOutputTemperature(((parseInt(input) - 273) * 9) / 5 + 32);
    }
  };

  useEffect(() => {
    convertTemperature();
  });
  return (
    <div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={inputTemperature} />
          <select
            name='time'
            id='time'
            className='inputs'
            onChange={onChangeInputType}
          >
            <option value='celsius'>celsius</option>
            <option value='fahrenheit'>fahrenheit</option>
            <option value='kelvin'>kelvin</option>
          </select>
        </div>
      </div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={outputTemperature} />
          <select
            name='time'
            id='time'
            className='inputs'
            onChange={onChangeOutputType}
          >
            <option value='celsius'>celsius</option>
            <option value='fahrenheit'>fahrenheit</option>
            <option value='kelvin'>kelvin</option>
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
            setInputTemperature("");
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

export default TemperatureConversion;
