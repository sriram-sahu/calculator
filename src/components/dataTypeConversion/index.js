import React, { useState, useEffect } from "react";
// import "./index.css";
const DataTypeConversion = () => {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState(0);
  const [inputDataType, setInputDataType] = useState("gb");
  const [outputDataType, setOutputDataType] = useState("gb");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const onAddNumber = (val) => {
    setInputData(inputData + val);
    convertData();
  };

  const onChangeInputType = (event) => {
    setInputDataType(event.target.value);
    convertData();
  };
  const onChangeOutputType = (event) => {
    setOutputDataType(event.target.value);
    convertData();
  };

  const deleteElement = () => {
    setInputData(inputData.replace(inputData[inputData.length - 1], ""));
  };

  function convertData() {
    let result;
    let input = inputData;
    if (inputData === "") {
      input = 0;
    }
    if (inputDataType === "gb") {
      if (outputDataType === "mb") {
        result = parseInt(input) * 1024;
      } else if (outputDataType === "kb") {
        result = parseInt(input) * 1048576;
      } else {
        result = parseInt(input);
      }
    } else if (inputDataType === "mb") {
      if (outputDataType === "gb") {
        result = parseInt(input) / 1024;
      } else if (outputDataType === "kb") {
        result = parseInt(input) * 1024;
      } else {
        result = parseInt(input);
      }
    } else if (inputDataType === "kb") {
      if (outputDataType === "gb") {
        result = parseInt(input) / 1048576;
      } else if (outputDataType === "mb") {
        result = parseInt(input) / 1024;
      } else {
        result = parseInt(input);
      }
    }
    setOutputData(result);
  }

  useEffect(() => {
    convertData();
  });
  return (
    <div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={inputData} />
          <select
            name='time'
            className='inputs'
            id='time'
            onChange={onChangeInputType}
          >
            <option value='gb'>GB</option>
            <option value='mb'>MB</option>
            <option value='kb'>KB</option>
          </select>
        </div>
      </div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={outputData} />
          <select
            name='time'
            className='inputs'
            id='time'
            onChange={onChangeOutputType}
          >
            <option value='gb'>GB</option>
            <option value='mb'>MB</option>
            <option value='kb'>KB</option>
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
            setInputData("");
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

export default DataTypeConversion;
