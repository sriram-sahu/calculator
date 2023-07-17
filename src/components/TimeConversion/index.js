import React, { useState, useEffect } from "react";
import "./index.css";
const TimeConversion = () => {
  const [inputTime, setInputTime] = useState("");
  const [outputTime, setOutputTime] = useState(0);
  const [inputTimeType, setInputTimeType] = useState("hours");
  const [outputTimeType, setOutputTimeType] = useState("hours");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const onAddNumber = (val) => {
    setInputTime(inputTime + val);
    convertTime();
  };

  const onChangeInputType = (event) => {
    setInputTimeType(event.target.value);
    convertTime();
  };
  const onChangeOutputType = (event) => {
    setOutputTimeType(event.target.value);
    convertTime();
  };

  const deleteElement = () => {
    setInputTime(inputTime.replace(inputTime[inputTime.length - 1], ""));
  };

  const convertTime = () => {
    let input = inputTime;
    if (inputTime === "") {
      input = 0;
    }
    if (inputTimeType === outputTimeType) {
      setOutputTime(parseInt(input));
    } else if (inputTimeType === "hours" && outputTimeType === "minutes") {
      setOutputTime(parseInt(input) * 60);
    } else if (inputTimeType === "hours" && outputTimeType === "seconds") {
      setOutputTime(parseInt(input) * 60 * 60);
    } else if (inputTimeType === "minutes" && outputTimeType === "seconds") {
      setOutputTime(parseInt(input) * 60);
    } else if (inputTimeType === "minutes" && outputTimeType === "hours") {
      setOutputTime(parseInt(input) / 60);
    } else if (inputTimeType === "seconds" && outputTimeType === "hours") {
      setOutputTime(parseInt(input) / 3600);
    } else if (inputTimeType === "seconds" && outputTimeType === "minutes") {
      setOutputTime(parseInt(input) / 60);
    }
  };

  useEffect(() => {
    convertTime();
  });
  return (
    <div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={inputTime} />
          <select
            name='time'
            className='inputs'
            id='time'
            onChange={onChangeInputType}
          >
            <option value='hours'>Hours</option>
            <option value='minutes'>Minutes</option>
            <option value='seconds'>Seconds</option>
          </select>
        </div>
      </div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={outputTime} />
          <select
            name='time'
            id='time'
            className='inputs'
            onChange={onChangeOutputType}
          >
            <option value='hours'>Hours</option>
            <option value='minutes'>minutes</option>
            <option value='seconds'>seconds</option>
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
            setInputTime("");
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

export default TimeConversion;
