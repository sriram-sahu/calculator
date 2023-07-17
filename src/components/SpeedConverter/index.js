import React, { useState, useEffect } from "react";
// import "./index.css";

const SpeedConverter = () => {
  const [inputSpeed, setInputSpeed] = useState("");
  const [outputSpeed, setOutputSpeed] = useState(0);
  const [inputSpeedType, setInputSpeedType] = useState("m/s");
  const [outputSpeedType, setOutputSpeedType] = useState("m/s");

  const onAddNumber = (val) => {
    setInputSpeed(inputSpeed + val);
    convertSpeed();
  };

  const onChangeInputType = (event) => {
    setInputSpeedType(event.target.value);
    convertSpeed();
  };

  const onChangeOutputType = (event) => {
    setOutputSpeedType(event.target.value);
    convertSpeed();
  };

  const deleteElement = () => {
    setInputSpeed(inputSpeed.replace(inputSpeed[inputSpeed.length - 1], ""));
  };

  const convertSpeed = () => {
    let result;
    let input = inputSpeed;
    if (inputSpeed === "") {
      input = 0;
    }
    if (inputSpeedType === "m/s") {
      if (outputSpeedType === "km/h") {
        result = parseFloat(input) * 3.6;
      } else if (outputSpeedType === "mph") {
        result = parseFloat(input) * 2.23694;
      } else {
        result = parseFloat(input);
      }
    } else if (inputSpeedType === "km/h") {
      if (outputSpeedType === "m/s") {
        result = parseFloat(input) / 3.6;
      } else if (outputSpeedType === "mph") {
        result = parseFloat(input) / 1.609;
      } else {
        result = parseFloat(input);
      }
    } else if (inputSpeedType === "mph") {
      if (outputSpeedType === "m/s") {
        result = parseFloat(input) / 2.23694;
      } else if (outputSpeedType === "km/h") {
        result = parseFloat(input) * 1.609;
      } else {
        result = parseFloat(input);
      }
    }
    setOutputSpeed(result);
  };

  useEffect(() => {
    convertSpeed();
  });

  return (
    <div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={inputSpeed} />
          <select
            name='speed'
            className='inputs'
            id='speed'
            onChange={onChangeInputType}
          >
            <option value='m/s'>m/s</option>
            <option value='km/h'>km/h</option>
            <option value='mph'>mph</option>
          </select>
        </div>
      </div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={outputSpeed} />
          <select
            name='speed'
            className='inputs'
            id='speed'
            onChange={onChangeOutputType}
          >
            <option value='m/s'>m/s</option>
            <option value='km/h'>km/h</option>
            <option value='mph'>mph</option>
          </select>
        </div>
      </div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((each) => (
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
            setInputSpeed("");
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

export default SpeedConverter;
