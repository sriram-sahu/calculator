import React, { useState, useEffect } from "react";
import "./index.css";
const AngleConversion = () => {
  const [inputAngle, setInputAngle] = useState("");
  const [outputAngle, setOutputAngle] = useState(0);
  const [inputAngleType, setInputAngleType] = useState("degrees");
  const [outputAngleType, setOutputAngleType] = useState("degrees");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const onAddNumber = (val) => {
    setInputAngle(inputAngle + val);
    convertAngle();
  };

  const onChangeInputType = (event) => {
    setInputAngleType(event.target.value);
    convertAngle();
  };
  const onChangeOutputType = (event) => {
    setOutputAngleType(event.target.value);
    convertAngle();
  };

  function convertAngle() {
    let input = inputAngle;
    if (inputAngle === "") {
      input = 0;
    }
    let result;
    if (inputAngleType === "degrees") {
      if (outputAngleType === "radians") {
        result = (parseInt(input) * Math.PI) / 180;
      } else if (outputAngleType === "gradians") {
        result = parseInt(input) * (10 / 9);
      } else {
        result = parseInt(input);
      }
    } else if (inputAngleType === "radians") {
      if (outputAngleType === "degrees") {
        result = (parseInt(input) * 180) / Math.PI;
      } else if (outputAngleType === "gradians") {
        result = (parseInt(input) * 200) / Math.PI;
      } else {
        result = parseFloat(input);
      }
    } else if (inputAngleType === "gradians") {
      if (outputAngleType === "degrees") {
        result = parseInt(input) * (9 / 10);
      } else if (outputAngleType === "radians") {
        result = (parseInt(input) * Math.PI) / 180;
      } else {
        result = parseFloat(input);
      }
    }
    setOutputAngle(result);
  }

  const deleteElement = () => {
    setInputAngle(inputAngle.replace(inputAngle[inputAngle.length - 1], ""));
  };

  useEffect(() => {
    convertAngle();
  });
  return (
    <div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={inputAngle} />
          <select
            name='time'
            className='inputs'
            id='time'
            onChange={onChangeInputType}
          >
            <option value='degrees'>Degree</option>
            <option value='radians'>Radian</option>
            <option value='gradians'>Gradient</option>
          </select>
        </div>
      </div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={outputAngle} />
          <select
            name='time'
            className='inputs'
            id='time'
            onChange={onChangeOutputType}
          >
            <option value='degrees'>Degree</option>
            <option value='radians'>Radian</option>
            <option value='gradians'>Gradians</option>
          </select>
        </div>
      </div>
      <div>
        {numbers.map((each) => (
          <button
            key={each}
            className='btn btn-primary button1'
            onClick={() => onAddNumber(each)}
          >
            {each}
          </button>
        ))}
        <button
          className='btn btn-danger button1'
          onClick={() => {
            setInputAngle("");
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

export default AngleConversion;
